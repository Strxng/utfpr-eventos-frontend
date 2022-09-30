import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'components/Buttons'
import React from 'react'
import { BackButtonContainer } from './styles'

export const BackButton = (): JSX.Element => {
  const { goBack } = useNavigation()

  return (
    <BackButtonContainer>
      <IconButton iconName='arrow-left' size={25} onPress={() => goBack()}/>
    </BackButtonContainer>
  )
}
