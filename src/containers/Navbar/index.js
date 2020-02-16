import withLogic from './withLogic'
import {Wrapper, StyledLink} from './styles'

const Navbar = props => (
  <Wrapper {...props}>
    <StyledLink href="/tags">Tags</StyledLink>
    <StyledLink href="/timeline">Timeline</StyledLink>
  </Wrapper>
)

export {Navbar}

export default withLogic(Navbar)
