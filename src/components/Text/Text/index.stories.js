import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'

import Text from '.'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices nibh vel leo ullamcorper fermentum. Proin vitae sem tincidunt, tempor tortor quis, varius purus. Suspendisse iaculis luctus lorem non aliquet.'

storiesOf('UI|Text/Text', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Text>{text('text', lorem)}</Text>
  ))
  .add('as header', () => (
    <Text type="header">
      {text('text', 'Lorem ipsum dolor sit amet')}
    </Text>
  ))
  .add('as subheader', () => (
    <Text type="subheader">
      {text('text', 'Lorem ipsum dolor sit amet')}
    </Text>
  ))
