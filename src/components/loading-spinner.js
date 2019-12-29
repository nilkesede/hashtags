import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bool} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons';

class LoadingSpinner extends Component {
  static propTypes = {
    isLoading: bool.isRequired
  };

  render() {
    const {isLoading} = this.props;

    return isLoading && (
      <div className="wrapper">
        <div className="spinner">
          <FontAwesomeIcon spin size="5x" icon={faCompactDisc} color="white"/>
        </div>

        <style jsx>{`
        .wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, .4);
        }
        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        `}
        </style>
      </div>
    );
  }
}

export default connect(({isLoading}) => ({isLoading}))(LoadingSpinner);
