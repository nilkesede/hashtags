import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func, object} from 'prop-types';

import {saveTask} from '../store/actions';
import Datepicker from './datepicker';

class AddTask extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    user: object
  }

  static defaultProps = {
    user: null
  }

  state = {
    value: ''
  }

  datePicker = React.createRef();
  scheduleDate = null;

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleAddTask = event => {
    event.preventDefault();
    const date = new Date().getTime();

    this.props.dispatch(saveTask({
      id: date,
      text: this.state.value,
      userId: this.props.user.uid,
      delete: false,
      schedule: this.scheduleDate
    }));

    this.setState({value: ''});
    this.datePicker.current.clear();
  }

  handleScheduleChange = date => {
    this.scheduleDate = date;
  }

  render() {
    return (
      <div className="row">
        <form className="col" onSubmit={this.handleAddTask}>
          <input type="text" value={this.state.value} className="form-control"
            placeholder="add new task..." onChange={this.handleValueChange}/>
        </form>
        <div className="col-6 col-sm-5 px-0">
          <Datepicker ref={this.datePicker} onChange={this.handleScheduleChange} onSubmit={this.handleAddTask}/>
        </div>
      </div>
    );
  }
}

export default connect(({user}) => ({user}))(AddTask);
