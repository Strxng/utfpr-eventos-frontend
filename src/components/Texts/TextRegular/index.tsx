import React from 'react'

import { StyledText } from './styles'

interface TextRegularProps {
  size?: number
  style?: {}
  children?: string | JSX.Element
}

export const TextRegular = ({ size = 16, children, style }: TextRegularProps): JSX.Element => {
  return <StyledText style={{ ...style, fontSize: size }}>{children}</StyledText>
}
