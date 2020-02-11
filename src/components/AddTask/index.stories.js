import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {withState} from '@dump247/storybook-state'

import {AddTask} from '.'

const datePicker = React.createRef()

storiesOf('Home|AddTask', module)
  .add('default', withState({value: ''})(({store}) => (
    <AddTask
      {...store.state}
      datePicker={datePicker}
      handleAddTask={action('add-task')}
      handleValueChange={event => {
        store.set({value: event.target.value})
        action('value-change')(event)
      }}
      handleScheduleChange={action('schedule-change')}
    />
  )))
