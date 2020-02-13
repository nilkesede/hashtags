import {connect} from 'react-redux'

import {constants} from '../../config'
import Head from '../components/Head'
import Navbar from '../containers/Navbar'
import withAuthCheck from '../lib/withAuthCheck'

const Index = () => {
  const {appName, appDescription} = constants
  const title = 'Timeline | ' + appName

  return (
    <>
      <Head title={title} description={appDescription}/>
      <Navbar/>
    </>
  )
}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps)(withAuthCheck(Index))
