import {useCallback} from 'react'
import {connect} from 'react-redux'
import debounce from 'lodash.debounce'

import {saveTag, updateTag} from '../../../store/actions'

const withLogic = Component => connect()(({tag, dispatch}) => {
  // eslint-disable-next-line prefer-arrow-callback
  const delayedSaveTag = debounce(function (tag) {
    dispatch(saveTag(tag))
  }, 500)

  const onChange = useCallback((event, tag) => {
    event.preventDefault()

    const newTag = {
      ...tag,
      text: event.target.value
    }

    dispatch(updateTag(newTag))
    delayedSaveTag(newTag)
  }, [dispatch, delayedSaveTag])

  const onDelete = useCallback((event, tag) => {
    event.preventDefault()
    dispatch(saveTag({
      ...tag,
      delete: true
    }))
  }, [dispatch])

  return (
    <Component
      tag={tag}
      onChange={onChange}
      onDelete={onDelete}
    />
  )
})

export default withLogic
