import {storiesOf} from '@storybook/react'

import Badge from '.'

storiesOf('UI|Badge', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', () => (
    <>
      <Badge isActive text="Badge 1"/>
      <Badge isActive={false} text="Badge 2"/>
      <Badge isActive text="Badge 3"/>
      <Badge isActive={false} text="Badge 4"/>
      <Badge isActive text="Badge 5"/>
    </>
  ))
