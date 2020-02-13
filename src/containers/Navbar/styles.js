import styled from 'styled-components'

import {Navbar} from '../../components/Navbar'
import {Link} from '../../components/Button'

export const Wrapper = styled(Navbar)``

export const StyledLink = styled(Link).attrs(_ => ({
  color: 'white',
  hoverColor: 'lightGray'
}))`
  margin: 0 10px;
`
