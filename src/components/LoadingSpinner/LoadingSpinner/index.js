import {bool} from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .4);
  display:flex;
  align-items: center;
  justify-content: center;
`

const LoadingSpinner = ({isLoading}) =>
  isLoading && (
    <Wrapper>
      <svg width="100" height="100" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s" dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"/>
            <animate
              attributeName="stroke-opacity"
              begin="0s" dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"/>
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s" dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"/>
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s" dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </Wrapper>
  )

LoadingSpinner.propTypes = {
  isLoading: bool
}

LoadingSpinner.defaultProps = {
  isLoading: false
}

export default LoadingSpinner
