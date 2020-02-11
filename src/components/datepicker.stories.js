import React from 'react'
import {storiesOf} from '@storybook/react'

import Datepicker from './datepicker'

storiesOf('Datepicker', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>
      {story()}
    </div>
  ))
  .add('default', () =>
    <Datepicker/>
  )
