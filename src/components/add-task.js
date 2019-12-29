import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func, object} from 'prop-types';

import {saveTask} from '../store/actions';

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
      schedule: null
    }));

    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleAddTask}>
        <input type="text" value={this.state.value} className="form-control" placeholder="add message..." onChange={this.handleValueChange}/>
      </form>
    );
  }
}

export default connect(({user}) => ({user}))(AddTask);
