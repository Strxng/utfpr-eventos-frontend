import React from 'react'
import { Input, StyledIcon, Container } from './styles'

interface SearchInputProps {
  value?: string
  placeholder: string
  style?: {}
  autoFocus?: boolean
  editable?: boolean
  onChangeText?: (text: string) => void
}

export const SearchInput = ({ value, placeholder, style, editable = true, autoFocus = false, onChangeText = () => {} }: SearchInputProps): JSX.Element => {
  return (
    <Container style={style}>
      <Input
        editable={editable}
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#b7b7b7'}
        onChangeText={onChangeText}
      >
      </Input>
      <StyledIcon name={'search'} size={25} />
    </Container>
  )
}
