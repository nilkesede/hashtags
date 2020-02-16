import App from 'next/app'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import {ThemeProvider} from 'styled-components'

import '../styles/main.scss'

import createStore from '../store'
import {loadUserData, listenTagsON, listenTagsOFF} from '../store/actions'
import {theme} from '../../config'

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx})
    }

    const user = ctx.req && ctx.req.session ? ctx.req.session.user : null
    if (user) {
      ctx.store.dispatch(loadUserData(user))
    }

    return {pageProps}
  }

  componentDidMount() {
    if (this.props.store.getState().user) {
      this.props.store.dispatch(listenTagsON())
    }
  }

  componentWillUnmount() {
    this.props.store.dispatch(listenTagsOFF())
  }

  render() {
    const {Component, pageProps, store} = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
