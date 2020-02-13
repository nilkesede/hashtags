import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'

import Navbar from './'

storiesOf('Home|Navbar', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItens: 'center',
        background: 'black',
        width: '100%',
        height: '130vh',
      }}>
      {story()}
      <h1 style={{ color: 'white' }}>Some content here</h1>
      <h2 style={{ color: 'white' }}>And here...</h2>
      <h3 style={{ color: 'white' }}>And here...</h3>
      <h4 style={{ color: 'white' }}>Here too...</h4>
    </div>
  )
  .add('default', () =>
    <Navbar />
  )
