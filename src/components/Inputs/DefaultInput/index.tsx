import React from 'react'

import { Input } from './styles'

interface DefaultInputProps {
  value: string
  placeholder: string
  style?: {}
}

export const DefaultInput = ({ value, placeholder, style = {} }: DefaultInputProps): JSX.Element => {
  return (
    <Input value={value} placeholder={placeholder} placeholderTextColor={'#b7b7b7'} style={style} />
  )
}
