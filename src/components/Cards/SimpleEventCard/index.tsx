import React from 'react'
import { TextBold, TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import moment from 'moment'
import 'moment/locale/pt-br'

import { Container, DateContainer, Footer } from './styles'

interface SimpleEventCardProps {
  eventName: string
  eventDate: Date
  style?: {}
}

export const SimpleEventCard = ({ eventName, eventDate, style }: SimpleEventCardProps): JSX.Element => {
  const formatEventDate = (): string => {
    moment.locale('pt-br')
    return moment(eventDate).format('ddd, DD MMMM YYYY - hh:mm')
  }

  const formatEventName = (): string => {
    return truncateString({ string: eventName, limit: 23 })
  }

  return (
    <Container style={style}>
      <Footer>
        <TextBold size={18} style={{ textAlign: 'left' }}>{formatEventName()}</TextBold>
        <DateContainer>
          <TextRegular size={12} style={{ color: '#76777C', textTransform: 'capitalize' }}>{formatEventDate()}</TextRegular>
        </DateContainer>
      </Footer>
    </Container>
  )
}