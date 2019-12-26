import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import '../setup';
import Index from '../../src/pages';
import LoginForm from '../../src/components/login-form';

describe('Index', () => {
  const mockStore = configureStore();

  const store = mockStore({
    error: null,
    user: null,
    tasks: []
  });

  const wrapper = mount(
    <Provider store={store}>
      <Index/>
    </Provider>);

  it('should show the app title', () => {
    expect(wrapper.find('h1').text()).toEqual('Hubtec tasks management app.');
  });

  it('should show the login form', () => {
    expect(wrapper.find(LoginForm).exists()).toBeTruthy();
  });
});
