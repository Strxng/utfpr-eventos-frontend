import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { TextInputMaskOptionProp, TextInputMaskTypeProp } from 'react-native-masked-text'
import { Input } from './styles'

interface InputWithMaskProps {
  value: string
  type: TextInputMaskTypeProp
  options: TextInputMaskOptionProp
  placeholder: string
  style?: StyleProp<TextStyle>
  onChangeText: (e: string | React.ChangeEvent<any>) => void
}

export const InputWithMask = ({ value, type, options, placeholder, style = {}, onChangeText }: InputWithMaskProps): JSX.Element => {
  return (
    <Input
      type={type}
      options={options}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'#b7b7b7'}
      style={style}
      onChangeText={onChangeText}
    />
  )
}
