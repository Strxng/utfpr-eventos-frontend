import React from 'react'

import { Input, StyledIcon, Container } from './styles'

interface InputWithIconProps {
  value?: string
  placeholder: string
  iconName: string
  onChangeText: (e: string | React.ChangeEvent<any>) => void
  style?: {}
  type?: 'text' | 'password'
}

export const InputWithIcon = ({ value, type = 'text', placeholder, iconName, style, onChangeText }: InputWithIconProps): JSX.Element => {
  return (
    <Container style={style}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#b7b7b7'}
        secureTextEntry={type === 'password'}
      >
      </Input>
        <StyledIcon name={iconName} size={25}/>
    </Container>
  )
}
