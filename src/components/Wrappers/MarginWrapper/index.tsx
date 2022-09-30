import React from 'react'

import { Wrapper } from './styles'

interface MarginWrapperProps {
  children: JSX.Element
  margin?: number
}

export const MarginWrapper = ({ children, margin }: MarginWrapperProps): JSX.Element => {
  return (
    <Wrapper style={{ marginBottom: margin }}>{children}</Wrapper>
  )
}
