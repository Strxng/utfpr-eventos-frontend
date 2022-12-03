import React from 'react'
import { IconButton } from 'components/Buttons'

import { Container } from './styles'
import { View } from 'react-native'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'

export const FooterNavigation = ({ navigation }: any): JSX.Element => {
  const { colors } = useTheme() as ThemeTypeProps

  const getActiveRouteName = (): string => {
    return navigation.getState().routeNames[navigation.getState().index]
  }

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Container>
        <IconButton
          iconName={'home'}
          size={30}
          selected={getActiveRouteName() === 'HomeTab'}
          onPress={() => {
            navigation.navigate('HomeTab')
          }}
        />
        <IconButton
          iconName={'heart'}
          size={30}
          selected={getActiveRouteName() === 'FavoritesTab'}
          onPress={() => {
            navigation.navigate('FavoritesTab')
          }}
        />
        <IconButton
          iconName={'user'}
          size={30}
          selected={getActiveRouteName() === 'ProfileTab'}
          onPress={() => {
            navigation.navigate('ProfileTab')
          }}
        />
      </Container>
    </View>
  )
}
