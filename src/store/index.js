import {applyMiddleware, createStore, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import firebase from 'firebase/app'
import withReduxEnhancer from 'addon-redux/enhancer'

import rootReducer, {defaultState} from './reducer'
import rootSaga from './saga'
import clientCredentials from '../../config/credentials/client'

if (firebase.apps.length === 0) {
  firebase.initializeApp(clientCredentials)
}

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const createEnhancer = middleware => {
  const enhancers = []
  enhancers.push(bindMiddleware([middleware]))

  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(withReduxEnhancer)
  }

  return compose(...enhancers)
}

function configureStore(initialState = defaultState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    createEnhancer(sagaMiddleware)
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
