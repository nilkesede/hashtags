import {all, put, take, takeLatest, takeEvery, delay, select} from 'redux-saga/effects'
import {eventChannel as EventChannel} from 'redux-saga'
import {post} from 'axios'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import {
  actionTypes,
  failure,
  loadUserData,
  unloadUserData,
  loadUserTags,
  unloadUserTags,
  listenTagsON,
  listenTagsOFF,
  startLoading,
  stopLoading,
  loadTweets,
  listenTweetsOFF,
  unloadTweets
} from './actions'
import {sortByIdDesc} from '../lib/utils'

function * createOrLoginUser({email, password}, login = false) {
  const action = login ? 'signInWithEmailAndPassword' : 'createUserWithEmailAndPassword'

  const {user} = yield firebase.auth()[action](email, password)
  const token = yield user.getIdToken()

  yield post('/api/login', {token})

  const userData = {
    uid: user.uid,
    email: user.email
  }

  yield put(loadUserData(userData))
  yield put(listenTagsON())
}

function * makeLogin(payload) {
  try {
    yield put(startLoading())
    yield createOrLoginUser(payload)
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      try {
        yield createOrLoginUser(payload, true)
      } catch (error) {
        yield put(failure(error))
      }
    }

    yield put(failure(error))
  } finally {
    yield put(stopLoading())
  }
}

function * makeLogout() {
  try {
    yield put(startLoading())
    yield firebase.auth().signOut()
    yield post('/api/logout')

    yield put(listenTagsOFF())
    yield put(listenTweetsOFF())

    yield put(unloadUserData())
    yield put(unloadUserTags())
    yield put(unloadTweets())
  } catch (error) {
    yield put(failure(error))
  } finally {
    yield put(stopLoading())
  }
}

let tagsListener = null
function * addTagsListener() {
  try {
    const user = yield select(({user}) => user)

    if (!user || tagsListener) {
      return
    }

    tagsListener = new EventChannel(emiter => {
      const database = firebase.firestore()

      return database.collection('tags').onSnapshot(
        snapshot => {
          const tags = []

          snapshot.forEach(document_ => {
            const tag = document_.data()

            if (tag.userId === user.uid && !tag.delete) {
              tags.push(tag)
            }

            tags.sort(sortByIdDesc)
          })

          if (tags) {
            emiter(tags)
          }
        },
        error => {
          throw error
        }
      )
    })

    while (true) {
      const tags = yield take(tagsListener)
      yield put(loadUserTags(tags))
      yield delay(500)
    }
  } catch (error) {
    yield put(failure(error))
  }
}

function * removeTagsListener() {
  if (tagsListener) {
    try {
      yield tagsListener.close()
      tagsListener = null
    } catch (error) {
      yield put(failure(error))
    }
  }
}

let tweetsListener = null
function * addTweetsListener() {
  try {
    const tags = yield select(({tags}) => tags)

    if (!tags || tweetsListener) {
      return
    }

    const tagsText = tags.map(t => t.text)

    tweetsListener = new EventChannel(emiter => {
      const database = firebase.firestore()

      return database.collection('tweets').onSnapshot(
        snapshot => {
          const tweets = []

          snapshot.forEach(document_ => {
            const tweet = document_.data()

            if (tagsText.some(v => tweet.text.includes(v))) {
              tweets.push(tweet)
            }

            tweets.sort(sortByIdDesc)
          })

          if (tweets) {
            emiter(tweets)
          }
        },
        error => {
          throw error
        }
      )
    })

    while (true) {
      const tweets = yield take(tweetsListener)
      yield put(loadTweets(tweets))
      yield delay(500)
    }
  } catch (error) {
    yield put(failure(error))
  }
}

function * removeTweetsListener() {
  if (tweetsListener) {
    try {
      yield tweetsListener.close()
      tweetsListener = null
    } catch (error) {
      yield put(failure(error))
    }
  }
}

function * saveTagOnDatabase({tag}) {
  try {
    const database = firebase.firestore()
    yield database.collection('tags')
      .doc(`${tag.id}`)
      .set(tag)
  } catch (error) {
    yield put(failure(error))
  }
}

function * rootSaga() {
  yield all([
    takeLatest(actionTypes.MAKE_LOGIN, makeLogin),
    takeLatest(actionTypes.MAKE_LOGOUT, makeLogout),
    takeLatest(actionTypes.LISTEN_TAGS_ON, addTagsListener),
    takeLatest(actionTypes.LISTEN_TAGS_OFF, removeTagsListener),
    takeLatest(actionTypes.LISTEN_TWEETS_ON, addTweetsListener),
    takeLatest(actionTypes.LISTEN_TWEETS_OFF, removeTweetsListener),
    takeEvery(actionTypes.SAVE_TAG, saveTagOnDatabase)
  ])
}

export default rootSaga
