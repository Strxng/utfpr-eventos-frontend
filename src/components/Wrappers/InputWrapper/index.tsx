import React from 'react'
import { Wrapper } from './styles'

interface InputWrapperProps {
  children: JSX.Element
  style?: {}
}

export const InputWrapper = ({ children, style }: InputWrapperProps): JSX.Element => {
  return (
    <Wrapper style={style}>{children}</Wrapper>
  )
}
