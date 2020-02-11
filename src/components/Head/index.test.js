import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {shallow} from 'enzyme'

import Head from '.'

Enzyme.configure({adapter: new Adapter()})

const title = 'Hashtags'
const description = 'Hashtags application!'

describe('Head component', () => {
  const wrapper = shallow(<Head title={title} description={description}/>)

  it('should show the app title', () => {
    expect(wrapper.find('title').text()).toEqual(title)
  })

  it('should show the app meta tag description', () => {
    expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(description)
  })
})
