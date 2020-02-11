import React from 'react'
import {storiesOf} from '@storybook/react'

import Datepicker from '.'

storiesOf('UI|Datepicker/Datepicker', module)
  .add('default', () =>
    <Datepicker/>
  )
