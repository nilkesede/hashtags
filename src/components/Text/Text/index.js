import styled from 'styled-components'

const Text = styled.p.attrs(props => {
  if (['header'].includes(props.type)) {
    props.as = 'h1'
  }

  if (['subheader'].includes(props.type)) {
    props.as = 'h3'
  }

  return props
})`
  margin: 0;
`

export default props => <Text {...props}/>
