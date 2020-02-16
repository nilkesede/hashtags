import styled from 'styled-components'

const Container = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
`

export default props => <Container {...props}/>
