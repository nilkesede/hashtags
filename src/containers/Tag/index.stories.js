import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'

import {Tag} from '..'

storiesOf('UI|Tag/Tag', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tag>{text('text', 'Lorem ipsum')}</Tag>
  ))
