import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'components/Buttons'
import React from 'react'
import { BackButtonContainer } from './styles'

export const BackButton = (): JSX.Element => {
  const { goBack, getState } = useNavigation()

  const { routes, index } = getState()
  const { params } = routes[index] as any

  return (
    <BackButtonContainer>
      <IconButton iconName='arrow-left' size={25} onPress={() => {
        if (params.onGoBack && typeof params.onGoBack === 'function') {
          params.onGoBack()
        }
        goBack()
      }} />
    </BackButtonContainer>
  )
}
