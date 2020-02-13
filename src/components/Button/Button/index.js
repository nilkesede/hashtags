import React from 'react'
import {oneOfType, element, arrayOf, bool} from 'prop-types'

import {Wrapper, Label} from './styles'

const Button = React.forwardRef(({children, ...restProps}, ref) => (
  <Wrapper {...restProps} ref={ref} role="button" tabIndex="0">
    <Label {...restProps}>{children || 'Button'}</Label>
  </Wrapper>
))

Button.propTypes = {
  isBlock: bool,
  isBig: bool,
  children: oneOfType([
    element,
    arrayOf(element)
  ])
}

Button.defaultProps = {
  isBlock: false,
  isBig: false,
  children: null
}

export default Button
