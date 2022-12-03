import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'components/Icon'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'

interface IconButtonProps {
  iconName: string
  selected?: boolean
  size?: number
  onPress?: () => void
}

export const IconButton = ({
  onPress,
  iconName,
  selected = false,
  size = 35
}: IconButtonProps): JSX.Element => {
  const { colors } = useTheme() as ThemeTypeProps

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={size} color={selected ? '#F6C500' : colors.btnPrimary} />
    </TouchableOpacity>
  )
}
