import React, {Component} from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';
import Router from 'next/router';

import Head from '../components/head';
import LoginForm from '../components/login-form';

class Login extends Component {
  static propTypes = {
    user: object,
    error: object
  };

  static defaultProps = {
    user: null,
    error: null
  }

  title = 'Login | Hubtec Tasks';
  description = 'Login | Hubtec tasks management app.';

  checkUser = () => {
    if (this.props.user) {
      Router.push('/');
    }
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate() {
    this.checkUser();
  }

  render() {
    return (
      <div className="container">
        <Head title={this.title} description={this.description}/>
        <h1>{this.description}</h1>

        <LoginForm/>

        <pre>{JSON.stringify(this.props.error, null, 2) }</pre>
      </div>
    );
  }
}

export default connect(state => state)(Login);
