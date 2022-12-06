import React, { useCallback, useEffect, useState } from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { UserHeader } from 'components/Headers'
import { ScrollView } from 'react-native'
import { TextBold, TextRegular } from 'components/Texts'
import { EventCard, SmallTextCard } from 'components/Cards'
import { TextButton } from 'components/Buttons'
import { HomeScreenDataResponse, homeScreenDataService } from 'services/screenDataService'
import { useToast } from 'hooks/useToast'
import { Event } from 'services/eventService'
import { SearchButton } from './components/searchButton'

export const Home = ({ navigation }: any): JSX.Element => {
  const [screenData, setScreenData] = useState<HomeScreenDataResponse | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [isLoading, setIsloading] = useState<boolean>(false)
  const { notifyError } = useToast()

  const categories = screenData?.courses ?? []
  const popularEvents = screenData?.popularEvents ?? []
  const weekEvents = screenData?.weekEvents ?? []

  const applyMarginRight = (index: number, length: number): {} => {
    const style = index !== length - 1
      ? { marginRight: 20 }
      : { marginRight: 0 }

    return style
  }

  const refreshData = useCallback(() => {
    setIsloading(true)

    homeScreenDataService(selectedCategory).then((screenDataResponse) => {
      setScreenData({ ...screenDataResponse, courses: [{ id: '', name: 'Todos os cursos' }, ...screenDataResponse.courses] })
      setIsloading(false)
    }).catch(() => {
      notifyError('Não foi possível buscar os eventos')
      setIsloading(false)
    })
  }, [selectedCategory])

  const handleSeeAllPress = (eventType: 'week' | 'popular'): void => {
    const titlePage = eventType === 'popular' ? 'Eventos Populares' : 'Essa semana'
    navigation.navigate('EventList', { eventType, titlePage })
  }
  const handleCardPress = (event: Event): void => {
    navigation.navigate('Event', { event, onGoBack: () => refreshData() })
  }

  const onSearchInputPress = useCallback(() => {
    navigation.navigate('EventSearch', { onGoBack: () => refreshData() })
  }, [])

  useEffect(() => {
    refreshData()
  }, [selectedCategory])

  return (
    <FullPage spaceTop={true} isLoading={isLoading}>
      <Container>
        <UserHeader />
      </Container>

      <ScrollView style={{ marginBottom: 70, width: '100%' }} showsVerticalScrollIndicator={false}>
        <Container style={{ marginTop: 10 }}>
          <SearchButton onPress={onSearchInputPress} />
        </Container>

        {categories.length > 0 && (
          <>
            <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
              <TextBold size={22}>Categorias</TextBold>
            </Container>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ maxHeight: 60 }}
            >
              <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
                {categories.map((category, index) => {
                  const dinamicStyle = applyMarginRight(index, categories.length)

                  return (
                    <SmallTextCard
                      key={category.id}
                      text={category.name}
                      selected={selectedCategory === category.id}
                      style={dinamicStyle}
                      onPress={() => {
                        setSelectedCategory(category.id)
                      }}
                    />
                  )
                })}
              </Container>
            </ScrollView>
          </>
        )}

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Eventos Populares</TextBold>
          {popularEvents.length > 0 ? <TextButton text='Ver tudo' onPress={() => handleSeeAllPress('popular')} /> : <></>}
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 230 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {popularEvents.length > 0
              ? popularEvents.map((event, index) => {
                const dinamicStyle = applyMarginRight(index, popularEvents.length)

                return (
                  <EventCard
                    key={event.id}
                    eventName={event.name}
                    eventDate={event.startDate}
                    eventLocal={event.campus}
                    eventImage={event.image}
                    onPress={() => handleCardPress(event)}
                    style={dinamicStyle}
                  />
                )
              })
              : (
                <TextRegular>Nenhum evento encontrado</TextRegular>
                )}
          </Container>
        </ScrollView>

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Essa semana</TextBold>
          {weekEvents.length > 0 ? <TextButton text='Ver tudo' onPress={() => handleSeeAllPress('week')} /> : <></>}
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 230, marginBottom: 30 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {weekEvents.length > 0
              ? weekEvents.map((event, index) => {
                const dinamicStyle = applyMarginRight(index, weekEvents.length)

                return (
                  <EventCard
                    key={event.id}
                    eventName={event.name}
                    eventDate={event.startDate}
                    eventLocal={event.campus}
                    eventImage={event.image}
                    style={dinamicStyle}
                    onPress={() => handleCardPress(event)}
                    small={true}
                  />
                )
              })
              : (
                <TextRegular>Nenhum evento encontrado</TextRegular>
                )}
          </Container>
        </ScrollView>
      </ScrollView>
    </FullPage>
  )
}
