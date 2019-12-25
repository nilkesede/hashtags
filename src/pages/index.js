import React, {Component} from 'react';
import {connect} from 'react-redux';

import Head from '../components/head';

class Index extends Component {
  title = 'Home | Hubtec Tasks';
  description = 'Hubtec tasks management app.';

  render() {
    return (
      <div className="container">
        <Head title={this.title} description={this.description}/>
        <h1>{this.description}</h1>
      </div>
    );
  }
}

export default connect()(Index);
