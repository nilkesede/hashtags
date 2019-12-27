import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import '../setup';
import AddTask from '../../src/components/add-task';

describe('AddTask component', () => {
  const mockStore = configureStore();

  const store = mockStore({
    error: null,
    user: {
      uid: 11,
      email: 'nil@ksde.pw'
    },
    tasks: []
  });

  const wrapper = mount(
    <Provider store={store}>
      <AddTask/>
    </Provider>);

  it('should have a form with one text input', () => {
    expect(wrapper.find('form > input[type="text"]').exists()).toBeTruthy();
  });
});
