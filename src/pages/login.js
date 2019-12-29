import React, {Component} from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';
import Router from 'next/router';

import Head from '../components/head';
import LoginForm from '../components/login-form';
import LoadingSpinner from '../components/loading-spinner';

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
      <div className="wrapper">
        <LoadingSpinner/>

        <div className="container-fluid">
          <Head title={this.title} description={this.description}/>

          <LoginForm/>
        </div>

        <style global jsx>{`
          html, body, #__next, .container-fluid {
            width: 100%;
            height: 100%;
          }`}
        </style>
        <style jsx>{`
          .wrapper {
            width: 100%;
            height: 100%;
          }
          .container-fluid {
            display: flex;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
          }`}
        </style>
      </div>
    );
  }
}

export default connect(({user}) => ({user}))(Login);
