import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import AddTag from '.'

Enzyme.configure({adapter: new Adapter()})

describe('AddTag component', () => {
  const mockStore = configureStore()

  const store = mockStore({
    error: null,
    user: {
      uid: 11,
      email: 'nil@ksde.pw'
    },
    tags: []
  })

  const wrapper = mount(
    <Provider store={store}>
      <AddTag/>
    </Provider>)

  it('should have a form with one text input', () => {
    expect(wrapper.find('form input').exists()).toBeTruthy()
  })
})
