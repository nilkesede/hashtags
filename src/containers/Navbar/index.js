
import withLogic from './withLogic'
import {Wrapper, StyledLink} from './styles'

const Navbar = props => {
  return (
    <Wrapper {...props}>
      <StyledLink href="/">Timeline</StyledLink>
      <StyledLink href="/tags">Tags</StyledLink>
    </Wrapper>
  )
}

export default withLogic(Navbar)
