import withLogic from './withLogic'
import {Wrapper, StyledLink} from './styles'

const Navbar = props => (
  <Wrapper {...props}>
    <StyledLink href="/">Timeline</StyledLink>
    <StyledLink href="/tags">Tags</StyledLink>
  </Wrapper>
)

export {Navbar}

export default withLogic(Navbar)
