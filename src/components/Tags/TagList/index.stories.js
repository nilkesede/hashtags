import {storiesOf} from '@storybook/react'
import {Provider} from 'react-redux'
import addons from '@storybook/addons'
import withRedux from 'addon-redux/withRedux'
import configureStore from '../../../store'

import TagList from '.'

const tags = [
  {id: '1a', text: 'hashtag1'},
  {id: '2b', text: 'hashtag2'},
  {id: '3c', text: 'hashtag3'},
  {id: '4d', text: 'hashtag4'}
]

const withReduxSettings = {
  Provider,
  store: configureStore(),
  state: {tags},
  actions: [{name: 'Demo Action', action: {type: 'test'}}]
}

const withReduxDecorator = withRedux(addons)(withReduxSettings)

storiesOf('Tags|TagList', module)
  .addDecorator(withReduxDecorator)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', () =>
    <TagList tags={tags}/>
  )
