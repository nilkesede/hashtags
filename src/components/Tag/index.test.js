import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import Tag from '.'

Enzyme.configure({adapter: new Adapter()})

describe('Tag component', () => {
  const mockStore = configureStore()

  const store = mockStore({
    error: null,
    user: {
      uid: 11,
      email: 'nil@ksde.pw'
    },
    tags: []
  })

  const tag = {
    id: 11,
    text: 'tag',
    userId: 11
  }

  const wrapper = mount(
    <Provider store={store}>
      <Tag tag={tag}/>
    </Provider>)

  it('should have a text input', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
  })

  it('should have a button', () => {
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
