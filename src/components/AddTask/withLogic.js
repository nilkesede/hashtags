import React, {useState} from 'react'
import {connect} from 'react-redux'

import {saveTask} from '../../store/actions'

const mapStateToProps = ({user}) => ({user})

export default Component => connect(mapStateToProps)(props => {
  const [value, setValue] = useState('')
  const [scheduleDate, setScheduleDate] = useState(null)

  const {dispatch, user} = props
  const datePicker = React.createRef()

  const handleAddTask = () => {
    const date = new Date().getTime()

    dispatch(saveTask({
      id: date,
      text: value,
      userId: user.uid,
      delete: false,
      schedule: scheduleDate
    }))

    setValue('')
    datePicker.current.clear()
  }

  const handleValueChange = event => {
    setValue(event.target.value)
  }

  return (
    <Component
      value={value}
      datePicker={datePicker}
      handleAddTask={handleAddTask}
      handleValueChange={handleValueChange}
      handleScheduleChange={setScheduleDate}
      {...props}
    />
  )
})
