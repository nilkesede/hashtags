import {func, string} from 'prop-types'

import withLogic from './withLogic'
import {Wrapper, Form, Input} from './styles'

const AddTag = ({value, handleAddTag, handleValueChange}) => {
  const onSubmit = event => {
    event.preventDefault()
    handleAddTag(event)
  }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          value={value} className="form-control"
          placeholder="add new tag..." onChange={handleValueChange}/>
      </Form>
    </Wrapper>
  )
}

AddTag.propTypes = {
  value: string.isRequired,
  handleAddTag: func.isRequired,
  handleValueChange: func.isRequired
}

export {AddTag}

export default withLogic(AddTag)
