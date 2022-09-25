import React from 'react'

import { ContentContainer } from './styles'

interface ContainerProps {
  row?: boolean
  style?: {}
  children: JSX.Element | JSX.Element[]
}

export const Container = ({ row = false, style, children }: ContainerProps): JSX.Element => {
  const styles = {
    ...style,
    flexDirection: row ? 'row' : 'column'
  }

  return (
    <ContentContainer style={styles} >{children}</ContentContainer>
  )
}
