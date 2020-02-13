import {object, func} from 'prop-types'
import styled from 'styled-components'

import withLogic from './withLogic'
import TextBox from '../../Input'
import UnstyledButton from '../../Button'
import Text from '../../Text'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px
`
const InputContainer = styled.div`
  flex: 100;
  margin-right: 15px;
`

const Button = styled(UnstyledButton)`
  flex: 1;
`

const Tag = ({tag, onChange, onDelete}) => (
  <Wrapper>
    <InputContainer><TextBox value={tag.text} onChange={event => onChange(event, tag)}/></InputContainer>
    <Button isBlock isBig onClick={event => onDelete(event, tag)}><Text>delete</Text></Button>
  </Wrapper>
)

Tag.propTypes = {
  tag: object.isRequired,
  onChange: func.isRequired,
  onDelete: func.isRequired
}

export {Tag}

export default withLogic(Tag)
