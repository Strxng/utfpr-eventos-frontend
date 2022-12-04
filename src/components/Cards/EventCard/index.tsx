import React from 'react'
import { Icon } from 'components/Icon'
import { TextBold, TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import moment from 'moment'

import { Container, DateContainer, Footer, LocaleContainer } from './styles'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'

interface EventCardProps {
  eventName: string
  eventLocal: string
  eventDate: Date
  small?: boolean
  eventImage?: string
  onPress?: () => void
  style?: {}
}

export const EventCard = ({ eventName, eventLocal, eventImage, eventDate, small = false, style, onPress = () => { } }: EventCardProps): JSX.Element => {
  const { colors } = useTheme() as ThemeTypeProps

  const formatEventDate = (): string => {
    return moment(eventDate).format('DD/MM/YYYY')
  }

  const formatEventName = (): string => {
    return small
      ? truncateString({ string: eventName, limit: 12 })
      : truncateString({ string: eventName, limit: 23 })
  }

  const formatEventLocal = (): string => {
    return small
      ? truncateString({ string: eventLocal, limit: 18 })
      : truncateString({ string: eventLocal, limit: 32 })
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={{ width: small ? 190 : 280, ...style }}>
        <ImageBackground source={{ uri: eventImage }} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} imageStyle={{ borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
          <DateContainer>
            <Icon name="calendar" color={colors.textPrimary} />
            <TextRegular size={10} style={{ marginLeft: 8 }}>{formatEventDate()}</TextRegular>
          </DateContainer>
        </ImageBackground>

        <Footer>
          <TextBold size={18} style={{ textAlign: 'left' }}>{formatEventName()}</TextBold>
          <LocaleContainer>
            <Icon name="building" size={15} color={colors.textPrimary} />
            <TextRegular size={12} style={{ marginLeft: 5 }}>{formatEventLocal()}</TextRegular>
          </LocaleContainer>
        </Footer>
      </Container>
    </TouchableOpacity>
  )
}
