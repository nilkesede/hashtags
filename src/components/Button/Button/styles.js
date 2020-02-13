import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  padding: 15px 45px;
  border-radius: 5px;
  outline: none;
  text-align: center;
  cursor: pointer;
  background: ${props => props.theme.colors[props.color || props.theme.primaryColor]};
  display: ${props => props.isBlock || props.isBig ? 'flex' : 'inline-block'};
  width: ${props => props.isBlock ? '100%' : (props.isBig ? '400px' : 'auto')};

  ${props => props.isBig && css`
    align-items: center;
    justify-content: center;
    height: 80px;
  `}

  &:hover {
    opacity: .9;
  }

  &:active {
    opacity: 1;
  }
`

export const Label = styled.div`
  margin: auto;
  color: ${props => props.theme.colors.white};

  ${props => props.isBig && css`
    font-size: 1.5em
  `}
`
