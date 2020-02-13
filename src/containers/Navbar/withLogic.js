import React, {useCallback} from 'react'
import {connect} from 'react-redux'

import {makeLogout} from '../../store/actions'
import {constants} from '../../../config'

const withLogic = Component => connect()(({dispatch}) => {
  const {appName} = constants

  const handleLogout = useCallback(() => {
    dispatch(makeLogout())
  }, [dispatch])

  return (
    <Component title={appName} handleLogout={handleLogout}/>
  )
})

export default withLogic
