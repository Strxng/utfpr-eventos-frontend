import React, { useCallback, useState } from 'react'
import { Container, FullPage } from 'components/Wrappers'
import { IconButton, LargeButton } from 'components/Buttons'
import { TextBold, TextRegular } from 'components/Texts'
import { Icon } from 'components/Icon'
import moment from 'moment'
import 'moment/locale/pt-br'
import { BackButton } from 'components/Headers'
import { favoriteService, unfavoriteService } from 'services/userService'
import { ImageBackground, Share } from 'react-native'
import { useToast } from 'hooks/useToast'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../theme'
import { Event as EventInterface } from 'services/eventService'
import {
  BannerContainer,
  ShareContainer
} from './styles'

interface EventProps {
  route: {
    params: {
      event: EventInterface
    }
  }
}

export const Event = (props: EventProps): JSX.Element => {
  const event = props.route.params.event
  const [isFavorite, setIsFavorite] = useState<boolean>(event.isFavorite)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { notifyError, notifySuccess } = useToast()
  const { colors } = useTheme() as ThemeTypeProps

  const formatEventDate = (): string => {
    moment.locale('pt-br')
    return moment(event.startDate).format('ddd, DD MMMM YYYY')
  }

  const formatEventHour = (): string => {
    return moment(event.startDate).format('HH:mm')
  }

  const onFavorite = useCallback(() => {
    setIsLoading(true)

    if (!isFavorite) {
      favoriteService(event.id).then(() => {
        notifySuccess('Evento favoritado com sucesso')
        setIsFavorite(true)
        setIsLoading(false)
      }).catch(() => {
        notifyError('Falha ao favoritar o evento')
        setIsLoading(false)
      })
    } else {
      unfavoriteService(event.id).then(() => {
        notifySuccess('Evento desfavoritado com sucesso')
        setIsFavorite(false)
        setIsLoading(false)
      }).catch(() => {
        notifyError('Falha ao desfavoritar o evento')
        setIsLoading(false)
      })
    }
  }, [isFavorite])

  const onPressShareButton = useCallback(() => {
    Share.share({
      message: `Já viu o *${event.name}* que tá lá no app *UTFPR Eventos?*\n\nBaixa aí: https://finge-que-e-o-link-pra-baixar-o-app.com`
    }).then(() => {}).catch(() => {})
  }, [])

  return (
    <FullPage defaultPadding={false} isLoading={isLoading}>
      <BackButton />
      <BannerContainer>
        <ImageBackground source={{ uri: event.image }} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} />
      </BannerContainer>

      <Container style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Container row={true} style={{ justifyContent: 'space-between', marginTop: 20, marginBottom: 10, alignItems: 'center' }}>
          <TextBold size={24} style={{ textAlign: 'left' }}>{event.name}</TextBold>
          <IconButton iconName='heart' size={30} onPress={onFavorite} selected={isFavorite} />
        </Container>

        <Container row={true} style={{ alignItems: 'center', marginTop: 10 }}>
          <Icon name='location' size={15} color={colors.textPrimary} />
          <TextRegular size={12} style={{ marginLeft: 5 }}>{event.local}</TextRegular>
        </Container>

        <Container row={true} style={{ alignItems: 'center', marginTop: 10 }}>
          <Icon name='calendar' size={15} color={colors.textPrimary} />
          <TextRegular size={12} style={{ marginLeft: 5, textTransform: 'capitalize' }}>{formatEventDate()}</TextRegular>
        </Container>

        <Container row={true} style={{ alignItems: 'center', marginTop: 10 }}>
          <Icon name='building' size={15} color={colors.textPrimary} />
          <TextRegular size={12} style={{ marginLeft: 5, textTransform: 'capitalize' }}>{event.campus}</TextRegular>
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
        <LargeButton text='Compartilhar' iconName='share' onPress={onPressShareButton} />
      </ShareContainer>
    </FullPage>
  )
}
