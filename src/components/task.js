import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func, object} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';

import {saveTask, updateTask} from '../store/actions';

class Task extends Component {
  static propTypes = {
    task: object.isRequired,
    dispatch: func.isRequired
  };

  delayedEditTask = debounce(function (task) {
    this.props.dispatch(saveTask(task));
  }, 500)

  handleEditTask = (event, task) => {
    event.preventDefault();

    const newTask = {
      ...task,
      text: event.target.value
    };

    this.props.dispatch(updateTask(newTask));
    this.delayedEditTask(newTask);
  }

  handleDeleteTask = (event, task) => {
    event.preventDefault();
    this.props.dispatch(saveTask({
      ...task,
      delete: true
    }));
  }

  render() {
    const {task} = this.props;

    return (
      <div>
        <input type="text" value={task.text} className="form-control" onChange={event => this.handleEditTask(event, task)}/>
        <button type="button" className="btn-ico text-muted" onClick={event => this.handleDeleteTask(event, task)}><FontAwesomeIcon icon={faTimes}/></button>

        <style jsx>{`
        input {
          width: calc(100% - 40px);
          display: inline-block;
          margin-top: 10px;
        }
        button {
          margin-left: 10px;
        }
        `}
        </style>
      </div>
    );
  }
}

export default connect(state => state)(Task);
