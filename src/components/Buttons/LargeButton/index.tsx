import { Icon } from 'components/Icon'
import React from 'react'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'
import { Button, ButtonText } from './styles'

interface LargeButtonProps {
  text: string
  iconName?: string
  onPress?: () => void
}

export const LargeButton = ({ text, iconName, onPress = () => { } }: LargeButtonProps): JSX.Element => {
  const { colors } = useTheme() as ThemeTypeProps

  return (
    <Button onPress={onPress}>
      {iconName && <Icon name={iconName} size={20} color={colors.textSecondary} style={{ marginRight: 10 }} />}
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}
