import React, {Component} from 'react';
import {connect} from 'react-redux';
import {array, object} from 'prop-types';
import Router from 'next/router';

import Head from '../components/head';
import LoginForm from '../components/login-form';
import AddTask from '../components/add-task';
import Task from '../components/task';

class Index extends Component {
  static propTypes = {
    user: object,
    error: object,
    tasks: array
  };

  static defaultProps = {
    user: null,
    error: null,
    tasks: null
  }

  title = 'Home | Hubtec Tasks';
  description = 'Hubtec tasks management app.';

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

  render() {
    const {tasks, error} = this.props;

    return (
      <div className="container">
        <Head title={this.title} description={this.description}/>
        <h1>{this.description}</h1>

        <LoginForm/>

        <AddTask/>

        <ul>
          {tasks &&
            tasks.map(task => (
              <li key={task.id}><Task task={task}/></li>
            ))}
        </ul>

        <pre>{JSON.stringify(error, null, 2) }</pre>
      </div>
    );
  }
}

export default connect(state => state)(Index);
