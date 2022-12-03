import React, { useEffect, useState } from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { UserHeader } from 'components/Headers'
import { SearchInput } from 'components/Inputs'
import { ScrollView } from 'react-native'
import { TextBold, TextRegular } from 'components/Texts'
import { EventCard, SmallTextCard } from 'components/Cards'
import { TextButton } from 'components/Buttons'
import { Event, HomeScreenDataResponse, homeScreenDataService } from 'services/screenDataService'
import { useToast } from 'hooks/useToast'

export const Home = ({ navigation }: any): JSX.Element => {
  const [screenData, setScreenData] = useState<HomeScreenDataResponse | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const { notifyError } = useToast()

  const categories = screenData?.courses ?? []
  const popularEvents = screenData?.popularEvents ?? []
  const weekEvents = screenData?.weekEvents ?? []

  const handleSeeAllPress = (): void => {
    navigation.navigate('Filter')
  }
  const handleCardPress = (event: Event): void => {
    navigation.navigate('Event', { event })
  }
  const applyMarginRight = (index: number, length: number): {} => {
    const style = index !== length - 1
      ? { marginRight: 20 }
      : { marginRight: 0 }

    return style
  }

  useEffect(() => {
    homeScreenDataService(selectedCategory).then((screenDataResponse) => {
      setScreenData({ ...screenDataResponse, courses: [{ id: '', name: 'Todos os cursos' }, ...screenDataResponse.courses] })
    }).catch(() => {
      notifyError('Não foi possível buscar os eventos')
    })
  }, [selectedCategory])

  return (
    <FullPage spaceTop={true}>
      <Container>
        <UserHeader />
      </Container>

      <ScrollView style={{ marginBottom: 70, width: '100%' }} showsVerticalScrollIndicator={false}>
        <Container style={{ marginTop: 10 }}>
          <SearchInput placeholder='Pesquisar evento' />
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
          {popularEvents.length > 0 ? <TextButton text='Ver tudo' onPress={handleSeeAllPress} /> : <></>}
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
                  eventLocal={event.local}
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
          {weekEvents.length > 0 ? <TextButton text='Ver tudo' onPress={handleSeeAllPress} /> : <></>}
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
                  eventLocal={event.local}
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
