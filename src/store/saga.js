import {all, put, takeLatest} from 'redux-saga/effects';
import {post} from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

import {actionTypes, failure, loadUserData, unloadUserData} from './actions';

function * createOrLoginUser({email, password}, login = false) {
  const action = login ? 'signInWithEmailAndPassword' : 'createUserWithEmailAndPassword';

  const {user} = yield firebase.auth()[action](email, password);
  const token = yield user.getIdToken();

  yield post('/api/login', {token});

  return {
    uid: user.uid,
    email: user.email
  };
}

function * makeLogin(payload) {
  try {
    const user = yield createOrLoginUser(payload);
    yield put(loadUserData(user));
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      try {
        const user = yield createOrLoginUser(payload, true);
        yield put(loadUserData(user));
      } catch (error) {
        put(failure(error));
      }
    }

    put(failure(error));
  }
}

function * makeLogout() {
  try {
    yield firebase.auth().signOut();
    yield post('/api/logout');
    yield put(unloadUserData());
  } catch (error) {
    put(failure(error));
  }
}

function * rootSaga() {
  yield all([
    takeLatest(actionTypes.MAKE_LOGIN, makeLogin),
    takeLatest(actionTypes.MAKE_LOGOUT, makeLogout)
  ]);
}

export default rootSaga;
