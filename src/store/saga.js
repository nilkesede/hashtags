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
  stopLoading
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
    yield put(unloadUserData())
    yield put(listenTagsOFF())
  } catch (error) {
    yield put(failure(error))
  } finally {
    yield put(stopLoading())
  }
}

let channelDB = null
function * addDatabaseListener() {
  try {
    const user = yield select(({user}) => user)

    if (!user || channelDB) {
      return
    }

    channelDB = new EventChannel(emiter => {
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
      const tags = yield take(channelDB)
      yield put(loadUserTags(tags))
      yield delay(500)
    }
  } catch (error) {
    yield put(failure(error))
  }
}

function * removeDatabaseListener() {
  if (channelDB) {
    try {
      yield channelDB.close()
      yield put(unloadUserTags())
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
    takeLatest(actionTypes.LISTEN_TAGS_ON, addDatabaseListener),
    takeLatest(actionTypes.LISTEN_TAGS_OFF, removeDatabaseListener),
    takeEvery(actionTypes.SAVE_TAG, saveTagOnDatabase)
  ])
}

export default rootSaga
