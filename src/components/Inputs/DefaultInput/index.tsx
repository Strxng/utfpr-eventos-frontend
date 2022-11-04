import React from 'react'

import { Input } from './styles'

interface DefaultInputProps {
  value?: string
  placeholder: string
  style?: {}
  type?: 'text' | 'password'
  onChangeText: (e: string | React.ChangeEvent<any>) => void
}

export const DefaultInput = ({ value, placeholder, type = 'text', style = {}, onChangeText = () => {} }: DefaultInputProps): JSX.Element => {
  return (
    <Input secureTextEntry={type === 'password'} value={value} placeholder={placeholder} placeholderTextColor={'#b7b7b7'} style={style} onChangeText={onChangeText} />
  )
}
