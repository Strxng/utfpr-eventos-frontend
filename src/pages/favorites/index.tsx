import { FavoriteEventCard } from 'components/Cards'
import { TextRegular, TextMedium } from 'components/Texts'
import { Container, FullPage, MarginWrapper } from 'components/Wrappers'
import React from 'react'
import { ScrollView } from 'react-native'

export const Favorites = (): JSX.Element => {
  return (
    <FullPage spaceTop>
      <ScrollView>
        <Container style={{ height: 250, justifyContent: 'center', zIndex: 99, position: 'relative' }}>
          <TextMedium size={30} style={{ marginBottom: 10 }}>Meus favoritos</TextMedium>
          <TextRegular size={15}>Aqui você pode ver seus eventos favoritos</TextRegular>
        </Container>
        <Container>
          <MarginWrapper margin={15}>
            <FavoriteEventCard eventDate={new Date()} eventLocal={'Local do evento'} eventName={'Nome do evento'}/>
          </MarginWrapper>
          <MarginWrapper margin={15}>
            <FavoriteEventCard eventDate={new Date()} eventLocal={'Local do evento'} eventName={'Nome do evento'}/>
          </MarginWrapper>
          <MarginWrapper margin={15} >
            <FavoriteEventCard eventDate={new Date()} eventLocal={'Local do evento'} eventName={'Nome do evento'}/>
          </MarginWrapper>
        </Container>
      </ScrollView>
    </FullPage>
  )
}
