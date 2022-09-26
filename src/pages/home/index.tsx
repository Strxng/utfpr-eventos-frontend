import React from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { UserHeader } from 'components/Headers'
import { SearchInput } from 'components/Inputs'
import { ScrollView } from 'react-native'
import { TextBold } from 'components/Texts'
import { EventCard, SmallTextCard } from 'components/Cards'
import { TextButton } from 'components/Buttons'

export const Home = ({ navigation }: any): JSX.Element => {
  const categorias = [
    {
      id: 1,
      name: 'Engenharia de Software'
    },
    {
      id: 2,
      name: 'Engenharia Florestal'
    },
    {
      id: 3,
      name: 'Biotecnologia'
    }
  ]

  const eventos = [
    {
      id: 1,
      nome: 'Nome do evento',
      local: 'Local do evento',
      data: new Date(),
      image: null
    },
    {
      id: 2,
      nome: 'Nome do evento',
      local: 'Local do evento',
      data: new Date(),
      image: null
    },
    {
      id: 3,
      nome: 'Nome do evento',
      local: 'Local do evento',
      data: new Date(),
      image: null
    },
    {
      id: 4,
      nome: 'Nome do evento',
      local: 'Local do evento',
      data: new Date(),
      image: null
    }
  ]

  const handleSeeAll = (): void => {
    navigation.navigate('Filter')
  }

  return (
    <FullPage spaceTop={true}>
      <Container>
        <UserHeader />
      </Container>

      <ScrollView style={{ marginBottom: 70 }}>
        <Container style={{ marginTop: 10 }}>
          <SearchInput placeholder='Pesquisar evento' value={''}/>
        </Container>

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Categorias</TextBold>
          <TextButton text='Ver tudo' onPress={handleSeeAll} />
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 60 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {categorias.map((categoria, index) => (
              <SmallTextCard
                key={categoria.id}
                text={categoria.name}
                selected={index === 0}
                style={{ marginRight: 10 }}
              />
            ))}
          </Container>
        </ScrollView>

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Eventos Populares</TextBold>
          <TextButton text='Ver tudo' onPress={handleSeeAll} />
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 230 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {eventos.map((evento) => (
              <EventCard
                key={evento.id}
                eventName={evento.nome}
                eventDate={evento.data}
                eventLocal={evento.local}
                style={{ marginRight: 20 }}
              />
            ))}
          </Container>
        </ScrollView>

        <Container row={true} style={{ marginTop: 30, alignItems: 'center' }}>
          <TextBold size={22}>Essa semana</TextBold>
          <TextButton text='Ver tudo' onPress={handleSeeAll} />
        </Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 230, marginBottom: 30 }}
        >
          <Container row={true} style={{ paddingRight: 0, marginTop: 20 }}>
            {eventos.map((evento) => (
              <EventCard
                key={evento.id}
                eventName={evento.nome}
                eventDate={evento.data}
                eventLocal={evento.local}
                style={{ marginRight: 20 }}
                small={true}
              />
            ))}
          </Container>
        </ScrollView>
      </ScrollView>
    </FullPage>
  )
}
