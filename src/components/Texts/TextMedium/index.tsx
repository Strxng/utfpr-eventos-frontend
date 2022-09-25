import React from 'react'

import { StyledText } from './styles'

interface TextMediumProps {
  size?: number
  style?: {}
  children: string | JSX.Element
}

export const TextMedium = ({ size = 16, children, style }: TextMediumProps): JSX.Element => {
  return <StyledText style={{ ...style, fontSize: size }}>{children}</StyledText>
}
