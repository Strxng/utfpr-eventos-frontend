import React from 'react'
import moment from 'moment'
import { Icon } from 'components/Icon'
import { TextBold, TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import { CardButton, DateContainer, IconButton, IconWithTextContainer, ImageContainer, TextContainer } from './styles'
import { useNavigation } from '@react-navigation/native'

interface FavoriteEventCardProps {
  eventDate: Date
  eventName: string
  eventLocal: string
}

export const FavoriteEventCard = ({ eventDate, eventName, eventLocal }: FavoriteEventCardProps): JSX.Element => {
  const { navigate } = useNavigation()
  return (
      <CardButton onPress={() => navigate('Event')}>
        <ImageContainer>
          <DateContainer>
            <Icon name="calendar" color='white' />
            <TextRegular size={10} style={{ marginLeft: 8 }}>{moment(eventDate).format('DD/MM/YYYY')}</TextRegular>
          </DateContainer>
        </ImageContainer>

        <TextContainer>
          <TextBold>{truncateString({ string: eventName, limit: 14 })}</TextBold>

          <IconWithTextContainer>
            <TextRegular><Icon name="location"/></TextRegular>
            <TextRegular size={12} style={{ marginLeft: 5 }}>{truncateString({ string: eventLocal, limit: 18 })}</TextRegular>
          </IconWithTextContainer>
        </TextContainer>

        <IconButton>
          <Icon name="heart" size={45} color="yellow"/>
        </IconButton>
      </CardButton>
  )
}
