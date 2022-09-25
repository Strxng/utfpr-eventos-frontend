import styled from 'styled-components/native'
import { Icon } from '../../Icon'

export const Container = styled.View`
`

export const Input = styled.TextInput`
  display: flex;
  width: 100%;
  background-color: #282424;
  border-radius: 10px;
  height: 50px;
  padding-left: 10px;
  padding-right: 40px;
  color: white;
  font-family: 'PlusJakartaSans-Regular';
  font-size: 16px;
`

export const StyledIcon = styled(Icon)`
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
`
