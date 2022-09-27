import React from 'react'
import { Container, FullPage } from 'components/Wrappers'
import { IconButton, LargeButton } from 'components/Buttons'
import { TextBold, TextRegular } from 'components/Texts'
import { Icon } from 'components/Icon'

import moment from 'moment'
import 'moment/locale/pt-br'

import {
  BackButtonContainer,
  BannerContainer,
  DateContainer,
  DescriptionContainer,
  DescriptionHeader,
  EventPrincipalsContainer,
  HourContainer,
  LocaleContainer,
  PlaceAndDateContainer,
  ShareContainer
} from './styles'

const event = {
  name: 'Nome do Evento',
  date: new Date(),
  locale: 'Local do Evento',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  hour: '13:00'
}

interface EventProps {
  navigation: any
}

export const Event = ({ navigation }: EventProps): JSX.Element => {
  const formatEventDate = (): string => {
    moment.locale('pt-br')
    return moment(event.date).format('ddd, DD MMMM YYYY')
  }

  const handleBackButtonPress = (): void => {
    navigation.goBack()
  }

  return (
    <FullPage>
      <BannerContainer>
        <BackButtonContainer onPress={handleBackButtonPress}>
          <Icon name='arrow-left' color='white' size={30}/>
        </BackButtonContainer>
      </BannerContainer>

      <Container style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
        <DescriptionHeader>
          <EventPrincipalsContainer>
            <TextBold size={24}>{event.name}</TextBold>
            <PlaceAndDateContainer>
              <LocaleContainer>
                <Icon name="location" size={15} color='white'/>
                <TextRegular size={12} style={{ marginLeft: 5 }}>{event.locale}</TextRegular>
              </LocaleContainer>
              <DateContainer>
                <Icon name='calendar' size={15} color='white'></Icon>
                <TextRegular size={12} style={{ color: 'white', textTransform: 'capitalize', marginLeft: 5 }}>{formatEventDate()}</TextRegular>
              </DateContainer>
            </PlaceAndDateContainer>
          </EventPrincipalsContainer>
            <IconButton iconName='heart' size={30}/>
        </DescriptionHeader>

        <DescriptionContainer>
          <TextBold size={20}>Descrição</TextBold>
          <TextRegular size={13} style={{ textAlign: 'left' }}>{event.desc}</TextRegular>
        </DescriptionContainer>

        <HourContainer>
          <TextBold size={20}>Horário</TextBold>
          <TextRegular size={13} style={{ textAlign: 'left' }}>{event.hour}</TextRegular>
        </HourContainer>
      </Container>

      <ShareContainer>
        <LargeButton text='Compartilhar'/>
      </ShareContainer>
    </FullPage>
  )
}
