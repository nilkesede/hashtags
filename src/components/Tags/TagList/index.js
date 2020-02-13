import {arrayOf, object} from 'prop-types'

import {Tag} from '..'

const TagList = ({tags}) => (
  tags.map(tag => <Tag key={tag.id} tag={tag}/>)
)

TagList.propTypes = {
  tags: arrayOf(object)
}

TagList.defaultProps = {
  tags: null
}

export default TagList
