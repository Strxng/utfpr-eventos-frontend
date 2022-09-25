import React from 'react'
import { Button, ButtonText, ButtonContainer } from './styles'

interface OutlinedButtonProps {
  text: string
  style: {}
  onPress: () => void
}

export const OutlinedButton = ({ text, onPress = () => {}, style }: OutlinedButtonProps): JSX.Element => {
  return (
    <ButtonContainer>
      <Button style={style} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </Button>
    </ButtonContainer>
  )
}
