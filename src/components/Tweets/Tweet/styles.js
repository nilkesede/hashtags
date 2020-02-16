import styled from 'styled-components'

import {Text as UnstyledText} from '../../Text'
import {Link} from '../../Button'

export const Wrapper = styled.div`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, .2);
  border-radius: 5px;
  padding: 15px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  border-radius: 100%;
  margin-right: 10px;
`

export const Details = styled.div``

export const Name = styled.div`
  margin-bottom: 2px;
`

export const Username = styled.div``

export const Text = styled(UnstyledText)`
  margin-top: 15px;
`

export const TweetDate = styled(Link)`
  margin-top: 15px;
  font-size: 13px;
  color: ${props => props.theme.colors.gray};
  display: block;
`
