import {Component} from 'react'
import {connect} from 'react-redux'
import {func, object} from 'prop-types'
import debounce from 'lodash.debounce'

import {saveTag, updateTag} from '../../../store/actions'

class Tag extends Component {
  static propTypes = {
    tag: object.isRequired,
    dispatch: func.isRequired
  };

  delayedEditTag = debounce(function (tag) {
    this.props.dispatch(saveTag(tag))
  }, 500)

  handleEditTag = (event, tag) => {
    event.preventDefault()

    const newTag = {
      ...tag,
      text: event.target.value
    }

    this.props.dispatch(updateTag(newTag))
    this.delayedEditTag(newTag)
  }

  handleDeleteTag = (event, tag) => {
    event.preventDefault()
    this.props.dispatch(saveTag({
      ...tag,
      delete: true
    }))
  }

  handleScheduleChange = date => {
    const {tag} = this.props
    tag.schedule = date
    this.delayedEditTag(tag)
  }

  render() {
    const {tag} = this.props

    return (
      <div className="row">
        <div className="col">
          <input type="text" value={tag.text} className="form-control" onChange={event => this.handleEditTag(event, tag)}/>
        </div>

        <div className="col-auto px-0">
          <button type="button" className="btn text-muted" title="delete tag" onClick={event => this.handleDeleteTag(event, tag)}>delete</button>
        </div>

        <style jsx>{`
        .row {
          margin-top: 15px;
        }
        button {
          margin-left: 10px;
        }
        `}
        </style>
      </div>
    )
  }
}

export {Tag}

export default connect(state => state)(Tag)
