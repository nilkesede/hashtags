import React, {Component} from 'react'
import {bool} from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons'

import {Wrapper, Spinner} from './styles'

export default class LoadingSpinner extends Component {
  static propTypes = {
    isLoading: bool.isRequired
  };

  render() {
    const {isLoading} = this.props

    return isLoading && (
      <Wrapper>
        <Spinner>
          <FontAwesomeIcon spin size="5x" icon={faCompactDisc} color="white"/>
        </Spinner>
      </Wrapper>
    )
  }
}
