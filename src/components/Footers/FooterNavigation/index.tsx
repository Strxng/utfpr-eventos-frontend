import React, { useState } from 'react'
import { IconButton } from 'components/Buttons'

import { Container } from './styles'
import { View } from 'react-native'

export const FooterNavigation = ({ navigation }: any): JSX.Element => {
  const [selected, setSelected] = useState<string>('home')

  return (
    <View style={{ backgroundColor: 'black' }}>
      <Container>
        <IconButton
          iconName={'home'}
          size={30}
          selected={selected === 'home'}
          onPress={() => {
            setSelected('home')
            navigation.navigate('HomeTab')
          }}
        />
        <IconButton
          iconName={'heart'}
          size={30}
          selected={selected === 'favorites'}
          onPress={() => {
            setSelected('favorites')
            navigation.navigate('FavoritesTab')
          }}
        />
        <IconButton
          iconName={'user'}
          size={30}
          selected={selected === 'profile'}
          onPress={() => {
            setSelected('profile')
            navigation.navigate('ProfileTab')
          }}
        />
      </Container>
    </View>
  )
}
