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
import { Event as EventInterface } from 'services/screenDataService'
import { ImageBackground } from 'react-native'
import { useToast } from 'hooks/useToast'
interface EventProps {
  route: {
    params: {
      event: EventInterface
    }
  }
}

export const Event = (props: EventProps): JSX.Element => {
  const { notifyError } = useToast()

  const event = props.route.params.event

  const formatEventDate = (): string => {
    moment.locale('pt-br')
    return moment(event.startDate).format('ddd, DD MMMM YYYY')
  }

  const formatEventHour = (): string => {
    return moment(event.startDate).format('HH:mm')
  }

  const onFavorite = useCallback(() => {
    favoriteService(event.id).then(() => {
      // pinta o coracao
    }).catch(() => {
      notifyError('Falha ao favoritar o evento')
    })
  }, [])

  return (
    <FullPage defaultPadding={false}>
      <BackButton />
      <BannerContainer>
        <ImageBackground source={{ uri: event.image }} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} />
      </BannerContainer>

      <Container style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Container row={true} style={{ justifyContent: 'space-between', marginTop: 20, marginBottom: 10, alignItems: 'center' }}>
          <TextBold size={24} style={{ textAlign: 'left' }}>{event.name}</TextBold>
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
          <TextRegular size={13} style={{ textAlign: 'left' }}>{event.description}</TextRegular>
        </Container>

        <Container style={{ marginTop: 20 }}>
          <TextBold size={24} style={{ textAlign: 'left' }}>Horário</TextBold>
          <TextRegular size={13} style={{ textAlign: 'left' }}>{formatEventHour()}</TextRegular>
        </Container>
      </Container>

      <ShareContainer>
        <LargeButton text='Compartilhar' iconName='share'/>
      </ShareContainer>
    </FullPage>
  )
}
