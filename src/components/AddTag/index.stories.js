import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withState} from '@dump247/storybook-state'

import {AddTag} from '.'

storiesOf('Home|AddTag', module)
  .add('default', withState({value: ''})(({store}) => (
    <AddTag
      {...store.state}
      handleAddTag={action('add-tag')}
      handleValueChange={event => {
        store.set({value: event.target.value})
        action('value-change')(event)
      }}
    />
  )))
