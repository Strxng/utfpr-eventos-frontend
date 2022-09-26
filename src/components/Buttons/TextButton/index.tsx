import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TextRegular } from 'components/Texts'

interface TextButtonProps {
  text: string
  onPress?: any
  boxStyle?: object
  textSize?: number
}

export const TextButton = ({ text, onPress, boxStyle, textSize = 13 }: TextButtonProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...boxStyle, marginLeft: 'auto' }}>
      <TextRegular size={textSize}>{text}</TextRegular>
    </TouchableOpacity>
  )
}
