import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

import Navbar from '.'

storiesOf('UI|Navbar/Navbar', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Navbar
      title={text('title', 'Lorem')}
      handleLogout={action('logout')}
    >
      <a href="#/" style={{padding: '0 10px', color: 'white'}}>Link</a>
      <a href="#/" style={{padding: '0 10px', color: 'white'}}>Link</a>
      <a href="#/" style={{padding: '0 10px', color: 'white'}}>Link</a>
      <a href="#/" style={{padding: '0 10px', color: 'white'}}>Link</a>
    </Navbar>
  ))
