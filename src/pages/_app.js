import App from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from '../store';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProperties = {};

    if (Component.getInitialProps) {
      pageProperties = await Component.getInitialProps({ctx});
    }

    return {pageProps: pageProperties};
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
