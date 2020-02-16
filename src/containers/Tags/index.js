import {connect} from 'react-redux'
import styled from 'styled-components'
import {arrayOf, object} from 'prop-types'

import {Container as UnstyledContainer} from '../../components/Wrapper'
import {AddTag as UnstyledAddTag} from '../../components/Tags'
import {TagList} from '../../components/Tags'

const Container = styled(UnstyledContainer)`
  margin-top: 15px;
`

const AddTag = styled(UnstyledAddTag)`
  margin-bottom: 15px;
`

const Tags = ({tags}) => {
  return (
    <Container>
      <AddTag/>
      <TagList tags={tags}/>
    </Container>
  )
}

Tags.propTypes = {
  tags: arrayOf(object)
}

Tags.defaultProps = {
  tags: []
}

const mapStateToProps = ({tags}) => ({tags})
export default connect(mapStateToProps)(Tags)
