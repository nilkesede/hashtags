import {object, func} from 'prop-types'

import withLogic from './withLogic'
import TextBox from '../Input'
import Button from '../Button'
import Text from '../Text'

const Tag = ({tag, onChange, onDelete}) => (
  <>
    <TextBox value={tag.text} onChange={event => onChange(event, tag)}/>
    <Button isBlock isBig onClick={event => onDelete(event, tag)}><Text>delete</Text></Button>
  </>
)

Tag.propTypes = {
  tag: object.isRequired,
  onChange: func.isRequired,
  onDelete: func.isRequired
}

export {Tag}

export default withLogic(Tag)
