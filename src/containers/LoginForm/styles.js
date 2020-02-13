import styled from 'styled-components'

import {TextBox} from '../../components/Input'
import {Button as UnstyledButton} from '../../components/Button'
import {Text as UnstyledText} from '../../components/Text'
import {Container as UnstyledContainer} from '../../components/Wrapper'

export const Container = styled(UnstyledContainer)`
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  width: 400px;
  height: 350px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled(UnstyledText).attrs({
  type: 'header'
})``

export const Input = styled(TextBox)``

export const Button = styled(UnstyledButton).attrs({
  isBlock: true,
  isBig: true
})``

export const Text = styled(UnstyledText)``
