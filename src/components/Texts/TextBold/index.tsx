import React from 'react'
import { StyledText } from './styles.js'

interface TextBoldProps {
  size?: number
  style?: {}
  children?: string | JSX.Element
}

export const TextBold = ({ size = 16, children, style }: TextBoldProps): JSX.Element => {
  return <StyledText style={{ ...style, fontSize: size }}>{children}</StyledText>
}
