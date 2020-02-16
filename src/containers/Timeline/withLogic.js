import {connect} from 'react-redux'
import {useState, useEffect} from 'react'

import {listenTweetsON, listenTweetsOFF} from '../../store/actions'

const mapStateToProps = ({tweets, tags}) => ({tweets, tags})
const withLogic = Component => connect(mapStateToProps)(
  ({tweets, tags, isLoading, dispatch, ...restProps}) => {
    const [terms, setTerms] = useState([])
    const [filters, setFilter] = useState([])
    const [timeline, setTimeline] = useState([])
    const [isAll, setIsAll] = useState(true)

    useEffect(() => {
      dispatch(listenTweetsON())

      setTerms(tags.map(t => ({
        ...t,
        active: true
      })))

      return () => {
        dispatch(listenTweetsOFF())
      }
    }, [dispatch, tags])

    useEffect(() => {
      setFilter(terms.filter(t => t.active).map(t => t.text))
    }, [terms])

    useEffect(() => {
      setTimeline(tweets.filter(tweet => {
        return filters.some(v => tweet.text.includes(v))
      }))
    }, [tweets, filters, setTimeline])

    const setActiveTag = tagId => {
      if (tagId === 0) {
        setIsAll(!isAll)
        setTerms(terms.map(t => ({
          ...t,
          active: !isAll
        })))

        return
      }

      setTerms(terms.map(t => {
        if (isAll) {
          t.active = t.id === tagId
          return t
        }

        t.active = t.id === tagId ? !t.active : t.active
        return t
      }))

      setIsAll(false)
    }

    return (
      <Component
        terms={terms}
        tweets={timeline}
        isAll={isAll}
        setActiveTag={setActiveTag}
        {...restProps}
      />
    )
  }
)

export default withLogic
