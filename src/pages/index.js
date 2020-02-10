import React, {Component} from 'react';
import {connect} from 'react-redux';
import {array, object, func} from 'prop-types';
import Router from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

import Head from '../components/head';
import AddTask from '../components/add-task';
import Task from '../components/task';
import {makeLogout} from '../store/actions';

class Index extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    user: object,
    tasks: array
  };

  static defaultProps = {
    user: null,
    tasks: null
  }

  title = 'Tasks';
  description = 'tasks management app.';

  checkUser = () => {
    if (!this.props.user) {
      Router.push('/login');
    }
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate() {
    this.checkUser();
  }

  handleLogout = () => {
    this.props.dispatch(makeLogout());
  }

  render() {
    const {tasks} = this.props;

    return (
      <div>
        <Head title={this.title} description={this.description}/>

        <nav className="navbar sticky-top navbar-dark bg-dark px-0 mb-3">
          <div className="container">
            <span className="navbar-brand mb-0 h1">{this.title}</span>
            <button type="button" className="btn text-danger" onClick={this.handleLogout}><FontAwesomeIcon icon={faSignOutAlt}/></button>
          </div>
        </nav>

        <div className="container">
          <AddTask/>

          <br/><br/>

          <ul className="list-unstyled">
            {tasks &&
              tasks.map(task => (
                <li key={task.id}><Task task={task}/></li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Index);
