import {shape, string} from 'prop-types'

import {formatDate} from '../../../lib/utils'
import {
  Wrapper,
  Profile,
  Avatar,
  Details,
  Name,
  Username,
  Text,
  TweetDate
} from './styles'

const Tweet = ({tweet, ...restProps}) => (
  <Wrapper {...restProps}>
    <Profile href={`https://twitter.com/${tweet.user.username}`} target="_blank">
      <Avatar src={tweet.user.profileImage} alt={tweet.user.name}/>
      <Details>
        <Name>{tweet.user.name}</Name>
        <Username>@{tweet.user.username}</Username>
      </Details>
    </Profile>

    <Text>{tweet.text}</Text>

    <TweetDate href={`https://twitter.com/${tweet.user.username}/status/${tweet.id}`} target="_blank">
      {formatDate(new Date(tweet.createdAt))}
    </TweetDate>
  </Wrapper>
)

Tweet.propTypes = {
  tweet: shape({
    createdAt: string,
    id: string,
    text: string,
    user: shape({
      id: string,
      name: string,
      profileImage: string,
      username: string
    })
  })
}

export default Tweet
