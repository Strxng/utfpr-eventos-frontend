import React, { useEffect, useState } from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { UserHeader } from 'components/Headers'
import { SearchInput } from 'components/Inputs'
import { ScrollView } from 'react-native'
import { TextBold, TextRegular } from 'components/Texts'
import { EventCard, SmallTextCard } from 'components/Cards'
import { TextButton } from 'components/Buttons'
import { HomeScreenDataResponse, homeScreenDataService } from 'services/screenDataService'

export const Home = ({ navigation }: any): JSX.Element => {
  const [screenData, setScreenData] = useState<HomeScreenDataResponse | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const categories = screenData?.courses ?? []

  const popularEvents = selectedCategory
    ? screenData?.popularEvents.filter((event) => event.courseId === selectedCategory) ?? []
    : screenData?.popularEvents ?? []

  const weekEvents = selectedCategory
    ? screenData?.weekEvents.filter((event) => event.courseId === selectedCategory) ?? []
    : screenData?.weekEvents ?? []

  const handleSeeAllPress = (): void => {
    navigation.navigate('Filter')
  }
  const handleCardPress = (): void => {
    navigation.navigate('Event')
  }

  useEffect(() => {
    homeScreenDataService().then((screenDataResponse) => {
      setScreenData(screenDataResponse)
    }).catch(() => {

    })
  }, [])

  return (
    <FullPage spaceTop={true}>
      <Container>
        <UserHeader />
      </Container>

      <ScrollView style={{ marginBottom: 70 }}>
        <Container style={{ marginTop: 10 }}>
          <SearchInput placeholder='Pesquisar evento'/>
        </Container>

        { categories.length > 0 && (
        <>
          <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
            <TextBold size={22}>Categorias</TextBold>
            {/* <TextButton text='Ver tudo' onPress={handleSeeAllPress} /> */}
          </Container>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ maxHeight: 60 }}
          >
            <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
              {categories.map((category) => (
                <SmallTextCard
                  key={category.id}
                  text={category.name}
                  selected={selectedCategory === category.id}
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    setSelectedCategory(category.id)
                  }}
                />
              ))}
            </Container>
          </ScrollView>
        </>
        )}

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Eventos Populares</TextBold>
          { <TextButton text='Ver tudo' onPress={handleSeeAllPress} />}
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 230 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {popularEvents.length > 0
              ? popularEvents.map((event) => (
              <EventCard
                key={event.id}
                eventName={event.name}
                eventDate={event.startDate}
                eventLocal={event.local}
                onPress={handleCardPress}
                style={{ marginRight: 20 }}
              />
              ))
              : (
                <TextRegular>Nenhum evento encontrado</TextRegular>
                )}
          </Container>
        </ScrollView>

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Essa semana</TextBold>
          <TextButton text='Ver tudo' onPress={handleSeeAllPress} />
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 230, marginBottom: 30 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {weekEvents.length > 0
              ? weekEvents.map((event) => (
              <EventCard
                key={event.id}
                eventName={event.name}
                eventDate={event.startDate}
                eventLocal={event.local}
                style={{ marginRight: 20 }}
                onPress={handleCardPress}
                small={true}
              />
              ))
              : (
              <TextRegular>Nenhum evento encontrado</TextRegular>
                )}
          </Container>
        </ScrollView>
      </ScrollView>
    </FullPage>
  )
}
