import {configure, addDecorator} from '@storybook/react'
import Router from 'next/router'
import {ThemeProvider} from 'styled-components'

import {theme} from '../config'

import 'flatpickr/dist/flatpickr.css'
import '../src/styles/main.scss'

const mockedRouter = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  prefetch: () => {}
}

Router.router = mockedRouter

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

const request = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  request.keys().forEach(filename => request(filename))
}

configure(loadStories, module)
