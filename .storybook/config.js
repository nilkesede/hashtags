import { configure, addDecorator } from '@storybook/react'
import Router from 'next/router'

import 'flatpickr/dist/flatpickr.css'
import '../src/styles/main.scss'

const mockedRouter = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  prefetch: () => {},
}

Router.router = mockedRouter

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
