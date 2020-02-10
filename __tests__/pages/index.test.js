import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Router from 'next/router';

import '../setup';
import Index from '../../src/pages';

Router.push = jest.fn();

describe('Index', () => {
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
      <Index/>
    </Provider>);

  it('should show the app title', () => {
    expect(wrapper.find('.navbar-brand').text()).toEqual('Tasks');
  });

  it('should show tasks list', () => {
    expect(wrapper.find('ul').exists()).toBeTruthy();
  });
});
