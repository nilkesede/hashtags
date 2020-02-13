import {string, func, element, oneOfType, arrayOf} from 'prop-types'

import {Wrapper, Container, NavBrand, ChildWrapper, Logoff} from './styles'

const Navbar = ({title, children, handleLogout, ...restProps}) => (
  <Wrapper {...restProps}>
    <Container>
      <NavBrand href="/">{title}</NavBrand>
      <ChildWrapper>
        {children}
        <Logoff onClick={handleLogout}>Logoff</Logoff>
      </ChildWrapper>
    </Container>
  </Wrapper>
)

Navbar.propTypes = {
  title: string.isRequired,
  children: oneOfType([
    element,
    arrayOf(element)
  ]),
  handleLogout: func.isRequired
}

Navbar.defaultProps = {
  children: null
}

export default Navbar
