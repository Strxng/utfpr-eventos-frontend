import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, FullPage } from 'components/Wrappers'
import { SearchInput } from 'components/Inputs'
import { NavigationHeader } from 'components/Headers'
import { Event, getEventsService } from 'services/eventService'
import { useToast } from 'hooks/useToast'
import { FlatList } from 'react-native'
import { SimpleEventCard } from 'components/Cards'

interface EventSearchProps {
  navigation: any
}

let searchTimer: NodeJS.Timeout

export const EventSearch = ({ navigation }: EventSearchProps): JSX.Element => {
  const [eventList, setEventList] = useState<Event[]>()
  const [search, setSearch] = useState<string>('')
  const limit = useRef(50)
  const page = useRef(1)

  const { notifyError } = useToast()

  const getEventList = useCallback(() => {
    getEventsService({
      search,
      page: page.current,
      limit: limit.current
    }).then((eventsResponse) => {
      setEventList(eventsResponse)
    }).catch(() => {
      notifyError('Falha ao listar os eventos')
    })
  }, [search])

  useEffect(() => {
    if (search.length) {
      clearTimeout(searchTimer)
      searchTimer = setTimeout(() => {
        getEventList()
      }, 300)
    } else if (!search.length) {
      getEventList()
    }
  }, [search, page])

  return (
    <FullPage spaceTop={true}>
      <NavigationHeader backButton title='Pesquisar Eventos'/>
      <Container>
        <SearchInput
          placeholder='Nome do evento'
          value={search}
          autoFocus={true}
          onChangeText={(text: string) => {
            setSearch(text)
          }}
        />
      </Container>

      <Container style={{ marginTop: 25 }}>
        <FlatList
          data={eventList}
          style={{ width: '100%' }}
          renderItem={({ item: event }) => (
            <SimpleEventCard
              key={event.id}
              eventName={event.name}
              eventDate={event.startDate}
              eventImage={event.image}
              style={{ marginBottom: 20 }}
              onPress={() => {
                navigation.navigate('Event', { event })
              }}
            />
          )}
        />
      </Container>
    </FullPage>
  )
}
