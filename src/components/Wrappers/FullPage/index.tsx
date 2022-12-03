import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

import { ContentContainer } from './styles'

interface FullPageProps {
  isLoading?: boolean
  center?: boolean
  style?: {}
  spaceTop?: boolean
  children: JSX.Element | JSX.Element[]
  defaultPadding?: boolean
}

export const FullPage = ({ center = false, isLoading = false, style, spaceTop = false, children, defaultPadding = true }: FullPageProps): JSX.Element => {
  const styles = {
    ...style,
    justifyContent: center ? 'center' : 'flex-start',
    paddingTop: spaceTop ? 60 : 0,
    paddingRight: defaultPadding ? 20 : 0,
    paddingLeft: defaultPadding ? 20 : 0
  }

  return (
    <ContentContainer style={styles}>
      <Spinner visible={isLoading} />
      {children}
    </ContentContainer>
  )
}
