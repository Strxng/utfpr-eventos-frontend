import React from 'react'
import { Button, ButtonText } from './styles'

interface LargeButtonProps {
  text: string
  onPress?: () => void
}

export const LargeButton = ({ text, onPress = () => {} }: LargeButtonProps): JSX.Element => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}
