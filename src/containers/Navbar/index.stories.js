import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

import {constants} from '../../../config'
import {Navbar} from '.'

storiesOf('Home|Navbar', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItens: 'center',
        width: '100%',
        height: '130vh'
      }}
    >
      {story()}
      <h1>Some content here</h1>
      <h2>And here...</h2>
      <h3>And here...</h3>
      <h4>Here too...</h4>
    </div>
  ))
  .add('default', () =>
    <Navbar title={constants.appName} handleLogout={action('logout')}/>
  )
