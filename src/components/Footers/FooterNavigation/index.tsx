import React from 'react'
import { IconButton } from 'components/Buttons'
import { Container } from './styles'

interface FooterNavigationProps {
  homeSelected: boolean
  favoritesSelected: boolean
  userSelected: boolean
}

export const FooterNavigation = ({
  homeSelected = false,
  favoritesSelected = false,
  userSelected = false
}: FooterNavigationProps): JSX.Element => {
  return (
    <Container>
      <IconButton iconName={'home'} size={30} selected={homeSelected} onPress={() => {}}/>
      <IconButton iconName={'heart'} size={30} selected={favoritesSelected} onPress={() => {}}/>
      <IconButton iconName={'user'} size={30} selected={userSelected} onPress={() => {}}/>
    </Container>
  )
}
