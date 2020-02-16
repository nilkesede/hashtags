import {storiesOf} from '@storybook/react'

import {TweetList} from '..'

const tweets = [
  {
    createdAt: 'Sun Feb 16 14:56:26 +0000 2020',
    id: '1229056950916108289',
    text: 'Push Notifications in PWA Using Firebase and React ☞ https://t.co/1EFRjUsNCY #PWA #Reactjs #Firebase https://t.co/c4sEqjKruP',
    user: {
      id: '1121230963369857024',
      name: 'PWA News',
      profileImage: 'https://pbs.twimg.com/profile_images/1229056617011765248/wa0GjGx-_normal.png',
      username: 'pwanews'
    }
  },
  {
    createdAt: 'Sun Feb 16 14:56:26 +0000 2020',
    id: '1229056950916108289',
    text: 'Push Notifications in PWA Using Firebase and React ☞ https://t.co/1EFRjUsNCY #PWA #Reactjs #Firebase https://t.co/c4sEqjKruP',
    user: {
      id: '1121230963369857024',
      name: 'PWA News',
      profileImage: 'https://pbs.twimg.com/profile_images/1229056617011765248/wa0GjGx-_normal.png',
      username: 'pwanews'
    }
  },
  {
    createdAt: 'Sun Feb 16 14:56:26 +0000 2020',
    id: '1229056950916108289',
    text: 'Push Notifications in PWA Using Firebase and React ☞ https://t.co/1EFRjUsNCY #PWA #Reactjs #Firebase https://t.co/c4sEqjKruP',
    user: {
      id: '1121230963369857024',
      name: 'PWA News',
      profileImage: 'https://pbs.twimg.com/profile_images/1229056617011765248/wa0GjGx-_normal.png',
      username: 'pwanews'
    }
  },
  {
    createdAt: 'Sun Feb 16 14:56:26 +0000 2020',
    id: '1229056950916108289',
    text: 'Push Notifications in PWA Using Firebase and React ☞ https://t.co/1EFRjUsNCY #PWA #Reactjs #Firebase https://t.co/c4sEqjKruP',
    user: {
      id: '1121230963369857024',
      name: 'PWA News',
      profileImage: 'https://pbs.twimg.com/profile_images/1229056617011765248/wa0GjGx-_normal.png',
      username: 'pwanews'
    }
  },
  {
    createdAt: 'Sun Feb 16 14:56:26 +0000 2020',
    id: '1229056950916108289',
    text: 'Push Notifications in PWA Using Firebase and React ☞ https://t.co/1EFRjUsNCY #PWA #Reactjs #Firebase https://t.co/c4sEqjKruP',
    user: {
      id: '1121230963369857024',
      name: 'PWA News',
      profileImage: 'https://pbs.twimg.com/profile_images/1229056617011765248/wa0GjGx-_normal.png',
      username: 'pwanews'
    }
  }
]

storiesOf('Tweets|TweetList', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', () => (
    <TweetList tweets={tweets}/>
  ))
