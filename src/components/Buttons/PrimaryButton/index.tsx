import React from 'react'
import { Button, ButtonText, ButtonContainer } from './styles'

interface PrimaryButtonProps {
  text: string
  style?: {}
  onPress: () => void
}

export const PrimaryButton = ({ text, onPress = () => {}, style }: PrimaryButtonProps): JSX.Element => {
  return (
    <ButtonContainer>
      <Button style={style} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </Button>
    </ButtonContainer>
  )
}
