import React from 'react'
import moment from 'moment'
import { Icon } from 'components/Icon'
import { TextBold, TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import { CardButton, DateContainer, IconButton, IconWithTextContainer, ImageContainer, TextContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'
import { ImageBackground } from 'react-native'

interface FavoriteEventCardProps {
  eventDate: Date
  eventName: string
  eventLocal: string
  eventImage: string
  finished?: boolean
  onPress?: () => void
  onHeartPress?: () => void
}

export const FavoriteEventCard = ({ eventDate, eventName, eventLocal, eventImage, finished, onPress = () => { }, onHeartPress = () => { } }: FavoriteEventCardProps): JSX.Element => {
  const { navigate } = useNavigation()
  const { colors } = useTheme() as ThemeTypeProps

  return (
    <CardButton onPress={onPress}>
      <ImageContainer>
        <ImageBackground source={{ uri: eventImage }} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} imageStyle={{ borderTopLeftRadius: 18, borderTopRightRadius: 18, borderBottomLeftRadius: 18, borderBottomRightRadius: 18 }}>
          <DateContainer>
            {finished ? (
              <TextRegular size={10} style={{ marginLeft: 8 }}>Finalizado</TextRegular>
            ) : (
              <><Icon name="calendar" color={colors.textPrimary} /><TextRegular size={10} style={{ marginLeft: 8 }}>{moment(eventDate).format('DD/MM/YYYY')}</TextRegular></>
            )}
          </DateContainer>
        </ImageBackground>
      </ImageContainer>

      <TextContainer>
        <TextBold>{truncateString({ string: eventName, limit: 14 })}</TextBold>

        <IconWithTextContainer>
          <TextRegular><Icon name="location" /></TextRegular>
          <TextRegular size={12} style={{ marginLeft: 5 }}>{truncateString({ string: eventLocal, limit: 18 })}</TextRegular>
        </IconWithTextContainer>
      </TextContainer>

      {!finished && <IconButton onPress={onHeartPress} >
        <Icon name="heart" size={45} color={'yellow'} />
      </IconButton>}
    </CardButton >
  )
}
