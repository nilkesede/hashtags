import React, {Component} from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';

import Head from '../components/head';
import LoginForm from '../components/login-form';

class Index extends Component {
  static propTypes = {
    error: object
  };

  static defaultProps = {
    error: null
  }

  title = 'Home | Hubtec Tasks';
  description = 'Hubtec tasks management app.';

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

export default connect(({error}) => ({error}))(Index);
