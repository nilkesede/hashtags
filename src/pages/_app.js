import App from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import firebase from 'firebase/app';

import createStore from '../store';
import clientCredentials from '../../credentials/client';
import {loadUserData} from '../store/actions';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProperties = {};

    if (Component.getInitialProps) {
      pageProperties = await Component.getInitialProps({ctx});
    }

    const user = ctx.req && ctx.req.session ? ctx.req.session.user : null;
    if (user) {
      ctx.store.dispatch(loadUserData(user));
    }

    return {pageProps: pageProperties};
  }

  componentDidMount() {
    firebase.initializeApp(clientCredentials);
  }

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
