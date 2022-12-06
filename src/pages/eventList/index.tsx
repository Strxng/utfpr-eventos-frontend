import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SimpleEventCard, SmallTextCard } from 'components/Cards'
import { NavigationHeader } from 'components/Headers'
import { Container, FullPage } from 'components/Wrappers'
import { useToast } from 'hooks/useToast'
import { FlatList, ScrollView } from 'react-native'
import { Campus, getCampusService } from 'services/campusService'
import { Event, getEventsService } from 'services/eventService'

interface EventListProps {
  navigation: any
  route: {
    params: {
      eventType: 'week' | 'popular'
      titlePage: string
    }
  }
}

export const EventList = ({ navigation, route }: EventListProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>()
  const [events, setEvents] = useState<Event[]>([])
  const [campus, setCampus] = useState<Campus[]>([])
  const [selectedCampus, setSelectedCampus] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const limit = useRef<number>(10)
  const { notifyError } = useToast()

  const getListData = useCallback(() => {
    setIsLoading(true)
    getEventsService({
      campusId: selectedCampus,
      courseId: '',
      limit: limit.current,
      page,
      search: '',
      eventType: route.params.eventType
    }).then((eventsResponse: Event[]) => {
      setIsLoading(false)
      if (eventsResponse.length > 0) {
        setEvents((oldEvents) => [...oldEvents, ...eventsResponse])
        setPage((oldPage) => oldPage + 1)
      }
    }).catch(() => {
      setIsLoading(false)
      notifyError('Falha ao listar os eventos')
    })
  }, [page, selectedCampus])

  const getCampusCategories = useCallback(() => {
    setIsLoading(true)
    getCampusService().then((c) => {
      setIsLoading(false)
      setCampus([{ id: '', courses: [], name: 'Todos os campus' }, ...c])
    }).catch(() => { })
  }, [])

  const applyMarginRight = (index: number, length: number): {} => {
    const style = index !== length - 1
      ? { marginRight: 20 }
      : { marginRight: 0 }

    return style
  }

  const onPressEventCard = useCallback((event: Event) => {
    navigation.navigate('Event', { event })
  }, [])

  useEffect(() => {
    getListData()
    getCampusCategories()
  }, [])

  return (
    <FullPage spaceTop isLoading={isLoading}>
      <Container style={{ marginBottom: 20 }}>
        <NavigationHeader backButton title={route.params.titlePage || 'Eventos'} />
      </Container>

      <>
        {campus.length > 0 && (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ maxHeight: 60, width: '100%' }}
            >
              <Container row={true} style={{ paddingRight: 0 }}>
                {campus.map((c, index) => {
                  const dinamicStyle = applyMarginRight(index, campus.length)
                  return (
                    <SmallTextCard
                      key={c.id}
                      text={c.name}
                      selected={selectedCampus === c.id}
                      style={dinamicStyle}
                      onPress={() => {
                        setSelectedCampus(c.id || '')
                        getListData()
                      }}
                    />
                  )
                })}
              </Container>
            </ScrollView>
          </>
        )}
      </>

      <FlatList
        data={events}
        style={{ width: '100%' }}
        onEndReached={() => {
          getListData()
        }}
        renderItem={({ item: event }) => (
          <SimpleEventCard
            key={event.id}
            eventName={event.name}
            eventDate={event.startDate}
            eventImage={event.image}
            style={{ marginBottom: 20 }}
            onPress={() => {
              onPressEventCard(event)
            }}
          />
        )}
      />
    </FullPage>
  )
}
