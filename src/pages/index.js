import React, {Component} from 'react';
import {connect} from 'react-redux';

import Head from '../components/head';
import LoginForm from '../components/login-form';

class Index extends Component {
  title = 'Home | Hubtec Tasks';
  description = 'Hubtec tasks management app.';

  render() {
    return (
      <div className="container">
        <Head title={this.title} description={this.description}/>
        <h1>{this.description}</h1>

        <LoginForm/>
      </div>
    );
  }
}

export default connect(state => state)(Index);
