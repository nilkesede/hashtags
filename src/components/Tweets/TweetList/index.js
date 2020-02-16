import {arrayOf, shape, string} from 'prop-types'
import styled from 'styled-components'

import {Tweet as UnstyledTweet} from '..'

const Wrapper = styled.div`
  padding: 5px;
  margin: 0 -5px;
`

const Tweet = styled(UnstyledTweet)`
  margin-bottom: 15px;
`

const TweetList = ({tweets, ...restProps}) => (
  <Wrapper {...restProps}>
    {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
  </Wrapper>
)

TweetList.propTypes = {
  tweets: arrayOf(shape({
    createdAt: string,
    id: string,
    text: string,
    user: shape({
      id: string,
      name: string,
      profileImage: string,
      username: string
    })
  }))
}

export default TweetList
