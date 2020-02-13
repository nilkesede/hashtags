import {storiesOf} from '@storybook/react'
import {withState} from '@dump247/storybook-state'
import {action} from '@storybook/addon-actions'

import {Tag} from '.'

storiesOf('Tags|Tag', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', withState({tag: {id: '1a2b3c', text: 'hashtag'}})(
    ({store}) => (
      <Tag
        {...store.state}
        onChange={(event, tag) => {
          event.preventDefault()

          store.set({tag: {
            ...tag,
            text: event.target.value
          }})

          action('value-change')(event)
        }}
        onDelete={action('delete-tag')}
      />
    )))
