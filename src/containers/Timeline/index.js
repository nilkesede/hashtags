import {useEffect} from 'react'
import {arrayOf, object, func} from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {listenTweetsON, listenTweetsOFF} from '../../store/actions'
import {Container as UnstyledContainer} from '../../components/Wrapper'
import {TweetList} from '../../components/Tweets'

const Container = styled(UnstyledContainer)`
  margin-top: 15px;
`

const Timeline = ({dispatch, tweets, tags}) => {
  useEffect(() => {
    dispatch(listenTweetsON())

    return () => {
      dispatch(listenTweetsOFF())
    }
  }, [dispatch, tags])

  return (
    <Container>
      <TweetList tweets={tweets}/>
    </Container>
  )
}

Timeline.propTypes = {
  dispatch: func.isRequired,
  tweets: arrayOf(object),
  tags: arrayOf(object)
}

const mapStateToProps = ({tweets, tags}) => ({tweets, tags})
export default connect(mapStateToProps)(Timeline)
