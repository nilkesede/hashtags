import {string, func, bool} from 'prop-types'

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import {Container, Form, Title, Input, Button, Text} from './styles'
import withLogic from './withLogic'

const LoginForm = ({
  email,
  password,
  isLoading,
  onSubmit,
  onEmailChange,
  onPasswordChange
}) => (
  <>
    <Container>
      <Form onSubmit={onSubmit}>
        <input type="submit" tabIndex="-1" style={{display: 'none'}}/>{/* hack to submit on enter */}

        <Title>Hashtags</Title>

        <Input
          required autoFocus
          type="email" name="email" placeholder="email address"
          value={email} onChange={onEmailChange}/>

        <Input
          required
          type="password" name="password" placeholder="password"
          value={password} onChange={onPasswordChange}/>

        <Button onClick={onSubmit}><Text>sign in/register</Text></Button>
      </Form>
    </Container>

    <LoadingSpinner isLoading={isLoading}/>
  </>
)

LoginForm.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  isLoading: bool,
  onSubmit: func.isRequired,
  onEmailChange: func.isRequired,
  onPasswordChange: func.isRequired
}

LoginForm.defaultProps = {
  isLoading: false
}

export default withLogic(LoginForm)
