import {arrayOf, object, bool, func} from 'prop-types'
import styled from 'styled-components'

import withLogic from './withLogic'
import {Container as UnstyledContainer} from '../../components/Wrapper'
import {TweetList as UnstyledTweetList} from '../../components/Tweets'
import Badge from '../../components/Badge'
import {Text} from '../../components/Text'

const Container = styled(UnstyledContainer)`
  margin-top: 15px;
  height: calc(100vh - 95px);
`

const TermList = styled.div`
  margin-bottom: 15px
`

const Term = styled(Badge)`
  margin-right: 5px;
  cursor: pointer;
`

const TweetList = styled(UnstyledTweetList)`
  height: 100%;
  overflow: auto;
`

const Timeline = ({tweets, terms, isAll, setActiveTag}) => {
  return (
    <Container>
      <TermList>
        <Term text="All" isActive={isAll} onClick={() => setActiveTag(0)}/>
        {terms.map(t => (
          <Term
            key={t.id}
            text={t.text}
            isActive={t.active}
            onClick={() => setActiveTag(t.id)}/>
        ))}
      </TermList>

      {tweets.length === 0 ? (
        <Text>no tweets yet</Text>
      ) : (
        <TweetList tweets={tweets}/>
      )}
    </Container>
  )
}

Timeline.propTypes = {
  tweets: arrayOf(object),
  terms: arrayOf(object),
  isAll: bool,
  setActiveTag: func
}

export default withLogic(Timeline)
