import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func, object} from 'prop-types';

import {makeLogin, makeLogout} from '../store/actions';

class LoginForm extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    user: object
  };

  static defaultProps = {
    user: null
  }

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

  handleLogin = () => {
    this.props.dispatch(makeLogin(this.state.email, this.state.password));
  }

  handleLogout = () => {
    this.props.dispatch(makeLogout());
  }

  render() {
    const {user} = this.props;

    return (
      <div>
        {user ? (
          <div>
            {user.email}
            <button type="button" onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
            <button type="button" onClick={this.handleLogin}>Login/Register</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(({user}) => ({user}))(LoginForm);
