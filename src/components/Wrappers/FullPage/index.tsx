import React from 'react'

import { ContentContainer } from './styles'

interface FullPageProps {
  center?: boolean
  style?: {}
  spaceTop?: boolean
  children: JSX.Element | JSX.Element[]
}

export const FullPage = ({ center = false, style, spaceTop = false, children }: FullPageProps): JSX.Element => {
  const styles = {
    ...style,
    justifyContent: center ? 'center' : 'flex-start',
    paddingTop: spaceTop ? 60 : 0
  }

  return (
    <ContentContainer style={styles}>{children}</ContentContainer>
  )
}
