import React from 'react'
import { TextBold, TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import moment from 'moment'
import 'moment/locale/pt-br'

import { Container, DateContainer, Footer } from './styles'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { ThemeTypeProps } from '../../../../theme'
import { useTheme } from 'styled-components'

interface SimpleEventCardProps {
  eventName: string
  eventDate: Date
  eventImage: string
  style?: {}
  onPress?: () => void
}

export const SimpleEventCard = ({ eventName, eventDate, eventImage, style, onPress = () => { } }: SimpleEventCardProps): JSX.Element => {
  const { font } = useTheme() as ThemeTypeProps

  const formatEventDate = (): string => {
    moment.locale('pt-br')
    return moment(eventDate).format('ddd, DD MMMM YYYY - hh:mm')
  }

  const formatEventName = (): string => {
    return truncateString({ string: eventName, limit: 23 })
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <ImageBackground source={{ uri: eventImage }} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} imageStyle={{ borderTopLeftRadius: 18, borderTopRightRadius: 18 }} />
        <Footer>
          <TextBold size={font.sizes.medium} style={{ textAlign: 'left' }}>{formatEventName()}</TextBold>
          <DateContainer>
            <TextRegular size={font.sizes.extraSmall} style={{ textTransform: 'capitalize' }}>{formatEventDate()}</TextRegular>
          </DateContainer>
        </Footer>
      </Container>
    </TouchableOpacity>
  )
}
