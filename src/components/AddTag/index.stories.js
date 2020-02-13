import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withState} from '@dump247/storybook-state'

import {AddTag} from '.'

storiesOf('Tags|AddTag', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', withState({value: ''})(({store}) => (
    <AddTag
      {...store.state}
      onSubmit={e => {
        e.preventDefault()
        action('add-tag')(e)
      }}
      onChange={e => {
        store.set({value: e.target.value})
        action('value-change')(e)
      }}
    />
  )))
