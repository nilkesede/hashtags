import {useState, useCallback} from 'react'
import {connect} from 'react-redux'

import {makeLogin} from '../../store/actions'

const mapStateToProps = ({isLoading}) => ({isLoading})

const withLogic = Component => connect(mapStateToProps)(
  ({isLoading, dispatch}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = useCallback(({target}) => {
      const {value} = target
      setEmail(value)
    }, [setEmail])

    const onPasswordChange = useCallback(({target}) => {
      const {value} = target
      setPassword(value)
    }, [setPassword])

    const onSubmit = useCallback(event => {
      event.preventDefault()
      dispatch(makeLogin(email, password))
    }, [dispatch, email, password])

    return (
      <Component
        email={email}
        password={password}
        isLoading={isLoading}
        onSubmit={onSubmit}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
      />
    )
  }
)

export default withLogic
