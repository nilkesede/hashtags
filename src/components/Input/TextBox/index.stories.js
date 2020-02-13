import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {action} from '@storybook/addon-actions'

import TextBox from '.'

storiesOf('UI|Input/TextBox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', withState({value: ''})(({store}) => (
    <TextBox
      {...store.state}
      placeholder={text('placeholder', 'Digite seu email')}
      tip={text('tip', 'Você vai precisar confirmar esse e-mail mais tarde.')}
      onChange={event => {
        store.set({value: event.target.value})
        action('value-change')(event)
      }}
    />
  )))
