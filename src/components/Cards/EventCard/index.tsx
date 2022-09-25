import React from 'react'
import { Container, DateContainer, Footer, LocaleContainer } from './styles'
import { Icon } from 'components/Icon'
import { TextBold, TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import moment from 'moment'

interface EventCardProps {
  eventName: string
  eventLocal: string
  eventDate: Date
  small: boolean
  style: {}
}

export const EventCard = ({ eventName, eventLocal, eventDate, small = false, style }: EventCardProps): JSX.Element => {
  const formatEventDate = (): string => {
    return moment(eventDate).format('DD/MM/YYYY')
  }

  const formatEventName = (): string => {
    return small
      ? truncateString({ string: eventName, limit: 13 })
      : truncateString({ string: eventName, limit: 23 })
  }

  const formatEventLocal = (): string => {
    return small
      ? truncateString({ string: eventName, limit: 20 })
      : truncateString({ string: eventLocal, limit: 32 })
  }

  return (
    <Container style={{ width: small ? 170 : 280, ...style }}>
      <DateContainer>
        <Icon name="calendar" color='white' />
        <TextRegular size={10} style={{ marginLeft: 8 }}>{formatEventDate()}</TextRegular>
      </DateContainer>

      <Footer>
        <TextBold size={18} style={{ textAlign: 'left' }}>{formatEventName()}</TextBold>
        <LocaleContainer>
          <Icon name="location" size={15} color='white'/>
          <TextRegular size={12} style={{ marginLeft: 5 }}>{formatEventLocal()}</TextRegular>
        </LocaleContainer>
      </Footer>
    </Container>
  )
}
