import styled from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'

export const Input = styled(TextInputMask)`
  display: flex;
  width: 100%;
  background-color: #282424;
  border-radius: 10px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-family: 'PlusJakartaSans-Regular';
  font-size: 16px;
`
