import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import AddTask from '.'

Enzyme.configure({adapter: new Adapter()})

describe('AddTask component', () => {
  const mockStore = configureStore()

  const store = mockStore({
    error: null,
    user: {
      uid: 11,
      email: 'nil@ksde.pw'
    },
    tasks: []
  })

  const wrapper = mount(
    <Provider store={store}>
      <AddTask/>
    </Provider>)

  it('should have a form with one text input', () => {
    expect(wrapper.find('form input').exists()).toBeTruthy()
  })
})
