import React from 'react'
import { TextRegular, TextBold } from 'components/Texts'
import moment from 'moment'

import { Circle, Column, Container } from './styles'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const UserHeader = (): JSX.Element => {
  const { navigate } = useNavigation()

  const checkDayMoment = (): string => {
    const dateNow = new Date()
    const hour = moment(dateNow).hour()

    if (hour >= 5 && hour <= 12) return 'Bom dia,'
    else if (hour >= 13 && hour <= 18) return 'Boa tarde,'
    else return 'Boa noite,'
  }

  return (
    <Container>
      <Column>
        <TextRegular size={12} style={{ textAlign: 'left' }}>{checkDayMoment()}</TextRegular>
        <TextBold size={16} style={{ textAlign: 'left' }}>Nome do usuário</TextBold>
      </Column>
      <Column style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigate('ProfileTab')}>
          <Circle/>
        </TouchableOpacity>
      </Column>
    </Container>
  )
}
