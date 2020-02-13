import {object, string, func} from 'prop-types'

import {Wrapper, Input, Tip} from './styles'

const TextBox = ({
  style,
  value,
  tip,
  onChange,
  ...restProps
}) => (
  <Wrapper style={style}>
    <Input {...restProps} value={value} onChange={onChange}/>
    <Tip visible={Boolean(value) && Boolean(tip)}>{tip}</Tip>
  </Wrapper>
)

TextBox.propTypes = {
  style: object,
  value: string,
  tip: string,
  onChange: func
}

TextBox.defaultProps = {
  style: null,
  value: '',
  tip: '',
  onChange: null
}

export default TextBox
