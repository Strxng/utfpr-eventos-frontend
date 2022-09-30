import React from 'react'

import { Input, StyledIcon, Container } from './styles'

interface SearchInputProps {
  value?: string
  placeholder: string
  style?: {}
}

export const SearchInput = ({ value, placeholder, style }: SearchInputProps): JSX.Element => {
  return (
    <Container style={style}>
      <Input value={value} placeholder={placeholder} placeholderTextColor={'#b7b7b7'}>
      </Input>
        <StyledIcon name={'search'} size={25}/>
    </Container>
  )
}
