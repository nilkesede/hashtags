import {arrayOf, shape, string} from 'prop-types'
import styled from 'styled-components'

import {Tweet as UnstyledTweet} from '..'

const Tweet = styled(UnstyledTweet)`
  margin-bottom: 15px;
`

const TweetList = ({tweets}) => (
  tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)
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
