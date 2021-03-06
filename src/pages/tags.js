import {connect} from 'react-redux'

import {constants} from '../../config'
import Head from '../components/Head'
import Navbar from '../containers/Navbar'
import TagsContainer from '../containers/Tags'
import withAuthCheck from '../lib/withAuthCheck'

const Tags = () => {
  const {appName, appDescription} = constants
  const title = 'Tags | ' + appName

  return (
    <>
      <Head title={title} description={appDescription}/>
      <Navbar/>
      <TagsContainer/>
    </>
  )
}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps)(withAuthCheck(Tags))
