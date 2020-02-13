import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'

import Container from '.'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices nibh vel leo ullamcorper fermentum. Proin vitae sem tincidunt, tempor tortor quis, varius purus. Suspendisse iaculis luctus lorem non aliquet.'

storiesOf('UI|Wrapper/Container', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Container>{text('text', lorem)}</Container>
  ))
