import {useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {arrayOf, object, func} from 'prop-types'

import {listenTagsON, listenTagsOFF} from '../../store/actions'
import {Container as UnstyledContainer} from '../../components/Wrapper'
import {AddTag as UnstyledAddTag} from '../../components/Tags'
import {TagList} from '../../components/Tags'

const Container = styled(UnstyledContainer)`
  margin-top: 15px;
`

const AddTag = styled(UnstyledAddTag)`
  margin-bottom: 15px;
`

const Tags = ({dispatch, tags}) => {
  useEffect(() => {
    dispatch(listenTagsON())

    return () => {
      dispatch(listenTagsOFF())
    }
  }, [dispatch])

  return (
    <Container>
      <AddTag/>
      <TagList tags={tags}/>
    </Container>
  )
}

Tags.propTypes = {
  dispatch: func.isRequired,
  tags: arrayOf(object)
}

Tags.defaultProps = {
  tags: []
}

const mapStateToProps = ({tags}) => ({tags})
export default connect(mapStateToProps)(Tags)
