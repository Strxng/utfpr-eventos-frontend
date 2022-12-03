import { Icon } from 'components/Icon'
import React from 'react'
import { Button, ButtonText } from './styles'

interface LargeButtonProps {
  text: string
  iconName?: string
  onPress?: () => void
}

export const LargeButton = ({ text, iconName, onPress = () => { } }: LargeButtonProps): JSX.Element => {
  return (
    <Button onPress={onPress}>
      {iconName && <Icon name={iconName} size={20} color={'#fff'} style={{ marginRight: 10 }} />}
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}
