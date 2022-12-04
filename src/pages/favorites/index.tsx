import { FavoriteEventCard } from 'components/Cards'
import { TextRegular, TextMedium } from 'components/Texts'
import { Container, FullPage, MarginWrapper } from 'components/Wrappers'
import { useToast } from 'hooks/useToast'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Event } from 'services/screenDataService'
import { getFavoriteEvents, unfavoriteService } from 'services/userService'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../theme'

interface FavoritesProps {
  navigation: any
}

export const Favorites = ({ navigation }: FavoritesProps): JSX.Element => {
  const [events, setEvents] = useState<Event[]>([])
  const [finishedEvents, setFinishedEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { notifyError, notifySuccess } = useToast()
  const { font } = useTheme() as ThemeTypeProps

  const onHeartCardPress = useCallback((eventId: string) => {
    setIsLoading(true)

    unfavoriteService(eventId).then(() => {
      setIsLoading(false)
      notifySuccess('Evento desfavoritado com sucesso')
      getFavorites()
    }).catch(() => {
      setIsLoading(false)
      notifyError('Falha ao desfavoritar o evento')
    })
  }, [])

  const onCardPress = useCallback((event: Event) => {
    navigation.navigate('Event', {
      event,
      onGoBack: () => {
        getFavorites()
      }
    })
  }, [])

  const getFavorites = useCallback(() => {
    setIsLoading(true)
    getFavoriteEvents().then((eventsResponse) => {
      setIsLoading(false)
      setEvents(eventsResponse.events)
      setFinishedEvents(eventsResponse.finishedEvents)
    }).catch((err) => {
      setIsLoading(false)
      notifyError(err.message)
    })
  }, [])

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <FullPage spaceTop isLoading={isLoading}>
      <ScrollView>
        <Container style={{ height: 200, justifyContent: 'center', zIndex: 99, position: 'relative' }}>
          <TextMedium size={30} style={{ marginBottom: 10 }}>Meus favoritos</TextMedium>
          <TextRegular size={15}>Aqui você pode ver seus eventos favoritos</TextRegular>
        </Container>
        <Container>
          {events.map((event) => (
            <MarginWrapper margin={15} key={event.id}>
              <FavoriteEventCard
                eventDate={event.startDate}
                eventLocal={event.local}
                eventName={event.name}
                eventImage={event.image}
                onHeartPress={() => {
                  onHeartCardPress(event.id)
                }}
                onPress={() => {
                  onCardPress(event)
                }}
              />
            </MarginWrapper>
          ))}
        </Container>

        {finishedEvents.length > 0 && (
          <>
            <TextRegular size={font.sizes.large} style={{ textAlign: 'left', marginTop: 30 }}>Eventos finalizados</TextRegular>
            <Container style={{ marginTop: 10 }}>
              {finishedEvents.map((event) => (
                <MarginWrapper margin={15} key={event.id}>
                  <FavoriteEventCard
                    eventDate={event.startDate}
                    eventLocal={event.local}
                    eventName={event.name}
                    eventImage={event.image}
                    finished={true}
                  />
                </MarginWrapper>
              ))}
            </Container>
          </>
        )}
      </ScrollView>
    </FullPage >
  )
}
