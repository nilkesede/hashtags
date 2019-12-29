import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {makeLogin} from '../store/actions';

class LoginForm extends Component {
  static propTypes = {
    dispatch: func.isRequired
  };

  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;

    this.setState({
      [name]: value
    });
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.dispatch(makeLogin(this.state.email, this.state.password));
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleLogin}>
        <div className="text-center mb-2">
          <h1 className="h3 mb-3 font-weight-light">Hubtec Tasks</h1>
        </div>

        <div className="form-group">
          <input required autoFocus className="form-control form-control-lg"
            type="email" name="email" placeholder="Email address"
            value={this.state.email} onChange={this.handleInputChange}/>
        </div>

        <div className="form-group">
          <input required className="form-control form-control-lg"
            type="password" name="password" placeholder="Password"
            value={this.state.password} onChange={this.handleInputChange}/>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in/Register</button>

        <style jsx>{`
        .form-signin {
          width: 100%;
          max-width: 400px;
          margin: auto;
        }`}
        </style>
      </form>
    );
  }
}

export default connect()(LoginForm);
