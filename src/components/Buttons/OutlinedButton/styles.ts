import styled from 'styled-components/native'

export const ButtonContainer = styled.View`
  padding: 0 50px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: 1px;
  border-color: white;
  height: 45px;
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  color: white;
  font-family: 'PlusJakartaSans-Medium';
  font-size: 16px;
  text-align: center;
`