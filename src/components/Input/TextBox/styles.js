import styled from 'styled-components'

import {Text} from '../../Text'

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, .2);
  border-radius: 5px;
  width: 100%;
  height: 80px;
  display: inline-block;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 40px;
  font-size: 20px;
  background: transparent;
  outline: none;
  border: none;

  ::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }
`

export const Tip = styled(Text)`
  font-size: 13px;
  color: ${props => props.theme.colors.lightGray};
  position: absolute;
  bottom: -22px;
  left: 40px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity .5s;
`
