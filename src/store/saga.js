import {all, put, take, takeLatest, takeEvery, delay, select} from 'redux-saga/effects';
import {eventChannel as EventChannel} from 'redux-saga';
import {post} from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import {
  actionTypes,
  failure,
  loadUserData,
  unloadUserData,
  loadUserTasks,
  unloadUserTasks,
  listenTasksON,
  listenTasksOFF,
  startLoading,
  stopLoading
} from './actions';
import {sortByIdDesc} from '../lib/utils';

function * createOrLoginUser({email, password}, login = false) {
  const action = login ? 'signInWithEmailAndPassword' : 'createUserWithEmailAndPassword';

  const {user} = yield firebase.auth()[action](email, password);
  const token = yield user.getIdToken();

  yield post('/api/login', {token});

  const userData = {
    uid: user.uid,
    email: user.email
  };

  yield put(loadUserData(userData));
  yield put(listenTasksON());
}

function * makeLogin(payload) {
  try {
    yield put(startLoading());
    yield createOrLoginUser(payload);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      try {
        yield createOrLoginUser(payload, true);
      } catch (error) {
        yield put(failure(error));
      }
    }

    yield put(failure(error));
  } finally {
    yield put(stopLoading());
  }
}

function * makeLogout() {
  try {
    yield put(startLoading());
    yield firebase.auth().signOut();
    yield post('/api/logout');
    yield put(unloadUserData());
    yield put(listenTasksOFF());
  } catch (error) {
    yield put(failure(error));
  } finally {
    yield put(stopLoading());
  }
}

let channelDB = null;
function * addDatabaseListener() {
  try {
    const user = yield select(({user}) => user);

    if (!user || channelDB) {
      return;
    }

    channelDB = new EventChannel(emiter => {
      const database = firebase.firestore();

      return database.collection('tasks').onSnapshot(
        snapshot => {
          const tasks = [];

          snapshot.forEach(document_ => {
            const task = document_.data();

            if (task.userId === user.uid && !task.delete) {
              tasks.push(task);
            }

            tasks.sort(sortByIdDesc);
          });

          if (tasks) {
            emiter(tasks);
          }
        },
        error => {
          throw error;
        }
      );
    });

    while (true) {
      const tasks = yield take(channelDB);
      yield put(loadUserTasks(tasks));
      yield delay(500);
    }
  } catch (error) {
    yield put(failure(error));
  }
}

function * removeDatabaseListener() {
  if (channelDB) {
    try {
      yield channelDB.close();
      yield put(unloadUserTasks());
    } catch (error) {
      yield put(failure(error));
    }
  }
}

function * saveTaskOnDatabase({task}) {
  try {
    const database = firebase.firestore();
    yield database.collection('tasks')
      .doc(`${task.id}`)
      .set(task);
  } catch (error) {
    yield put(failure(error));
  }
}

function * rootSaga() {
  yield all([
    takeLatest(actionTypes.MAKE_LOGIN, makeLogin),
    takeLatest(actionTypes.MAKE_LOGOUT, makeLogout),
    takeLatest(actionTypes.LISTEN_TASKS_ON, addDatabaseListener),
    takeLatest(actionTypes.LISTEN_TASKS_OFF, removeDatabaseListener),
    takeEvery(actionTypes.SAVE_TASK, saveTaskOnDatabase)
  ]);
}

export default rootSaga;
