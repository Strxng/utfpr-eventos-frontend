import React from 'react'
import { ContentContainer } from './styles'

interface FullPageProps {
  center?: boolean
  style?: {}
  children: JSX.Element | JSX.Element[]
}

export const FullPage = ({ center = false, style, children }: FullPageProps): JSX.Element => {
  const styles = {
    ...style,
    justifyContent: center ? 'center' : 'start'
  }

  return (
    <ContentContainer style={styles}>{children}</ContentContainer>
  )
}
