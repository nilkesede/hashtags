import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'

import Link from '.'

storiesOf('UI|Button/Link', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Link>{text('text', 'Lorem ipsum')}</Link>
  ))
