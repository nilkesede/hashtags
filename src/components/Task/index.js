import React, {Component} from 'react'
import {connect} from 'react-redux'
import {func, object} from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import debounce from 'lodash.debounce'

import {saveTask, updateTask} from '../../store/actions'
import Datepicker from '../_UI/Datepicker'

class Task extends Component {
  static propTypes = {
    task: object.isRequired,
    dispatch: func.isRequired
  };

  delayedEditTask = debounce(function (task) {
    this.props.dispatch(saveTask(task))
  }, 500)

  handleEditTask = (event, task) => {
    event.preventDefault()

    const newTask = {
      ...task,
      text: event.target.value
    }

    this.props.dispatch(updateTask(newTask))
    this.delayedEditTask(newTask)
  }

  handleDeleteTask = (event, task) => {
    event.preventDefault()
    this.props.dispatch(saveTask({
      ...task,
      delete: true
    }))
  }

  handleScheduleChange = date => {
    const {task} = this.props
    task.schedule = date
    this.delayedEditTask(task)
  }

  render() {
    const {task} = this.props

    return (
      <div className="row">
        <div className="col">
          <input type="text" value={task.text} className="form-control" onChange={event => this.handleEditTask(event, task)}/>
        </div>

        <div className="col-5 col-sm-4 px-0">
          <Datepicker defaultDate={task.schedule} onChange={this.handleScheduleChange}/>
        </div>

        <div className="col-auto px-0">
          <button type="button" className="btn text-muted" title="delete task" onClick={event => this.handleDeleteTask(event, task)}><FontAwesomeIcon icon={faTrash}/></button>
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

export default connect(state => state)(Task)
