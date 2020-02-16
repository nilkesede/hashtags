import {string, bool} from 'prop-types'
import styled from 'styled-components'

import {Text as UnstyledText} from '../Text'

const Text = styled(UnstyledText)`
  font-weight: bold;
  text-transform: uppercase;

  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;

  color: #fff;
  background-color: ${props => props.isActive ? props.theme.colors.darkGray : props.theme.colors.gray};
`

const Badge = ({text, isActive, ...restProps}) => (
  <Text {...restProps} isActive={isActive} role="button">{text}</Text>
)

Badge.propTypes = {
  text: string,
  isActive: bool
}

export default Badge
