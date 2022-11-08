import React, { useCallback } from 'react'
import { Container, FullPage } from 'components/Wrappers'
import { IconButton, LargeButton } from 'components/Buttons'
import { TextBold, TextRegular } from 'components/Texts'
import { Icon } from 'components/Icon'

import moment from 'moment'
import 'moment/locale/pt-br'

import {
  BannerContainer,
  ShareContainer
} from './styles'
import { BackButton } from 'components/Headers'
import { favoriteService } from 'services/userService'

const event = {
  name: 'Nome do Evento',
  date: new Date(),
  locale: 'Local do Evento',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  hour: '13:00'
}

export const Event = (eventprops: any): JSX.Element => {
  const formatEventDate = (): string => {
    moment.locale('pt-br')
    return moment(event.date).format('ddd, DD MMMM YYYY')
  }

  const onFavorite = useCallback(() => {
    favoriteService(eventprops.id).then(() => {
      // pinta o coracao
    }).catch(() => {
      // joga o toast na tela
    })
  }, [])

  return (
    <FullPage>
      <BackButton />
      <BannerContainer />

      <Container row={true} style={{ justifyContent: 'space-between', marginTop: 20, marginBottom: 10, alignItems: 'center' }}>
        <TextBold size={24}>{event.name}</TextBold>
        <IconButton iconName='heart' size={30} onPress={onFavorite}/>
      </Container>

      <Container row={true} style={{ alignItems: 'center', marginTop: 10 }}>
        <Icon name='location' size={15} color='white'/>
        <TextRegular size={12} style={{ marginLeft: 5 }}>Local do evento</TextRegular>
      </Container>

      <Container row={true} style={{ alignItems: 'center', marginTop: 10 }}>
        <Icon name='calendar' size={15} color='white'/>
        <TextRegular size={12} style={{ marginLeft: 5, textTransform: 'capitalize' }}>{formatEventDate()}</TextRegular>
      </Container>

      <Container style={{ marginTop: 20 }}>
        <TextBold size={24} style={{ textAlign: 'left' }}>Descriçao</TextBold>
        <TextRegular size={13} style={{ textAlign: 'left' }}>{event.desc}</TextRegular>
      </Container>

      <Container style={{ marginTop: 20 }}>
        <TextBold size={24} style={{ textAlign: 'left' }}>Horário</TextBold>
        <TextRegular size={13} style={{ textAlign: 'left' }}>{event.hour}</TextRegular>
      </Container>

      <ShareContainer>
        <LargeButton text='Compartilhar' iconName='share'/>
      </ShareContainer>
    </FullPage>
  )
}
