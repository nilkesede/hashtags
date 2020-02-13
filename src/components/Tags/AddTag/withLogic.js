import {useState} from 'react'
import {connect} from 'react-redux'

import {saveTag} from '../../../store/actions'

const mapStateToProps = ({user}) => ({user})

const withLogic = Component => connect(mapStateToProps)(props => {
  const [value, setValue] = useState('')
  const {dispatch, user, ...restProps} = props

  const onSubmit = event => {
    event.preventDefault()

    const date = new Date().getTime()

    dispatch(saveTag({
      id: date,
      text: value,
      userId: user.uid,
      delete: false
    }))

    setValue('')
  }

  const onChange = event => {
    setValue(event.target.value)
  }

  return (
    <Component
      value={value}
      onSubmit={onSubmit}
      onChange={onChange}
      {...restProps}
    />
  )
})

export default withLogic
