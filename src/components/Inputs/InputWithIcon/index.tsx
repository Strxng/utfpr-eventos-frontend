import React from 'react'
import { Input, StyledIcon, Container } from './styles'

interface InputWithIconProps {
  value: string
  placeholder: string
  iconName: string
  style?: {}
}

export const InputWithIcon = ({ value, placeholder, iconName, style }: InputWithIconProps): JSX.Element => {
  return (
    <Container style={style}>
      <Input value={value} placeholder={placeholder} placeholderTextColor={'#b7b7b7'}>
      </Input>
        <StyledIcon name={iconName} size={25}/>
    </Container>
  )
}
