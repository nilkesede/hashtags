import styled from 'styled-components'

import {Link} from '../../Button'
import UnstyledContainer from '../../Wrapper/Container'

export const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  z-index: 999;
  background-color: ${props => props.theme.colors[props.theme.primaryColor]}
`

export const Container = styled(UnstyledContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const NavBrand = styled(Link).attrs({
  type: 'header'
})`
  font-size: 1.5em;
  color: ${props => props.theme.colors.white}
`

export const ChildWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logoff = styled(Link)`
  color: ${props => props.theme.colors.red};
  margin-left: 45px;
`
