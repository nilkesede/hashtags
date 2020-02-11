import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import {config as faConfig} from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'flatpickr/dist/flatpickr.css'
import '../styles/main.scss'

import createStore from '../store'
import {loadUserData, listenTasksON} from '../store/actions'

faConfig.autoAddCss = false

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProperties = {}

    if (Component.getInitialProps) {
      pageProperties = await Component.getInitialProps({ctx})
    }

    const user = ctx.req && ctx.req.session ? ctx.req.session.user : null
    if (user) {
      ctx.store.dispatch(loadUserData(user))
    }

    return {pageProps: pageProperties}
  }

  componentDidMount() {
    if (this.props.store.getState().user) {
      this.props.store.dispatch(listenTasksON())
    }
  }

  render() {
    const {Component, pageProps, store} = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
