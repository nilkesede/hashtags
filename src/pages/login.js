import {connect} from 'react-redux'

import {constants} from '../../config'
import Head from '../components/Head'
import LoginForm from '../containers/LoginForm'
import withAuthCheck from '../lib/withAuthCheck'

const Login = () => {
  const {appName, appDescription} = constants
  const title = 'Login | ' + appName

  return (
    <>
      <Head title={title} description={appDescription}/>
      <LoginForm/>
    </>
  )
}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps)(withAuthCheck(Login))
