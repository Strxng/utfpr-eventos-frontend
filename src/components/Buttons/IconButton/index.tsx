import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'components/Icon'

interface IconButtonProps {
  iconName: string
  selected: boolean
  size: number
  onPress: () => void
}

export const IconButton = ({
  onPress,
  iconName,
  selected = false,
  size = 35
}: IconButtonProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Icon name={iconName} size={size} color={selected ? '#F6C500' : 'white'}/>
    </TouchableOpacity>
  )
}
