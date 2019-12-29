import React, {Component} from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';
import Router from 'next/router';

import Head from '../components/head';
import LoginForm from '../components/login-form';

class Login extends Component {
  static propTypes = {
    user: object
  };

  static defaultProps = {
    user: null
  }

  title = 'Login | Hubtec Tasks';
  description = 'Hubtec tasks management app.';

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
      <div className="container-fluid">
        <Head title={this.title} description={this.description}/>

        <LoginForm/>

        <style global jsx>{`
        html, body, #__next, .container-fluid {
          height: 100%;
        }`}
        </style>
        <style jsx>{`
        .container-fluid {
          display: flex;
          align-items: center;
          padding-top: 40px;
          padding-bottom: 40px;
          background-color: #f5f5f5;
        }`}
        </style>
      </div>
    );
  }
}

export default connect(({user}) => ({user}))(Login);
