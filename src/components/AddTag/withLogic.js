import React, {useState} from 'react'
import {connect} from 'react-redux'

import {saveTag} from '../../store/actions'

const mapStateToProps = ({user}) => ({user})

export default Component => connect(mapStateToProps)(props => {
  const [value, setValue] = useState('')

  const {dispatch, user} = props

  const handleAddTag = () => {
    const date = new Date().getTime()

    dispatch(saveTag({
      id: date,
      text: value,
      userId: user.uid,
      delete: false
    }))

    setValue('')
  }

  const handleValueChange = event => {
    setValue(event.target.value)
  }

  return (
    <Component
      value={value}
      handleAddTag={handleAddTag}
      handleValueChange={handleValueChange}
      {...props}
    />
  )
})
