import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import '../setup'
import Task from '../../src/components/task'

describe('Task component', () => {
  const mockStore = configureStore()

  const store = mockStore({
    error: null,
    user: {
      uid: 11,
      email: 'nil@ksde.pw'
    },
    tasks: []
  })

  const task = {
    id: 11,
    text: 'task',
    userId: 11
  }

  const wrapper = mount(
    <Provider store={store}>
      <Task task={task}/>
    </Provider>)

  it('should have a text input', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
  })

  it('should have a button', () => {
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
