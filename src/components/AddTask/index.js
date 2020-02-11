import {func, string, object} from 'prop-types'

import Datepicker from '../_UI/Datepicker'
import withLogic from './withLogic'
import {Wrapper, Form, Input, DateWrapper} from './styles'

const AddTask = ({value, datePicker, handleAddTask, handleValueChange, handleScheduleChange}) => {
  const onSubmit = event => {
    event.preventDefault()
    handleAddTask(event)
  }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          value={value} className="form-control"
          placeholder="add new task..." onChange={handleValueChange}/>
      </Form>
      <DateWrapper>
        <Datepicker ref={datePicker} onChange={handleScheduleChange} onSubmit={handleAddTask}/>
      </DateWrapper>
    </Wrapper>
  )
}

AddTask.propTypes = {
  value: string.isRequired,
  datePicker: object.isRequired,
  handleAddTask: func.isRequired,
  handleValueChange: func.isRequired,
  handleScheduleChange: func.isRequired
}

export {AddTask}

export default withLogic(AddTask)
