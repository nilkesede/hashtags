import {storiesOf} from '@storybook/react'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import Button from '.'
import Text from '../../Text'

storiesOf('UI|Button/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', () => (
    <Button isBlock={boolean('isBlock', false)}>
      <Text>{text('label', 'Button')}</Text>
    </Button>
  ))
  .add('big', () => (
    <Button isBig isBlock={boolean('isBlock', false)}>
      <Text>{text('label', 'Button')}</Text>
    </Button>
  ))
