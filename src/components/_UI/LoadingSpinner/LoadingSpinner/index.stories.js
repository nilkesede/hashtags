import React from 'react'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import LoadingSpinner from '.'

storiesOf('UI|LoadingSpinner/LoadingSpinner', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{height: '500px'}}>
      {story()}
    </div>
  ))
  .add('default', () =>
    <LoadingSpinner isLoading={boolean('isLoading', true)}/>
  )
