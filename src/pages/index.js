import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
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
