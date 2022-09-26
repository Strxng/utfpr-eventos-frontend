import { SimpleEventCard, SmallTextCard } from 'components/Cards'
import { NavigationHeader } from 'components/Headers'
import { Container, FullPage } from 'components/Wrappers'
import React from 'react'
import { ScrollView } from 'react-native'

const categorias = [
  {
    id: 1,
    name: 'Todos'
  },
  {
    id: 2,
    name: 'Sei lá'
  },
  {
    id: 3,
    name: 'Sei lá'
  },
  {
    id: 4,
    name: 'Sei lá'
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

interface FilterProps {
  navigation: any
}

export const Filter = ({ navigation }: FilterProps): JSX.Element => {
  return (
    <FullPage spaceTop>
      <Container>
        <NavigationHeader backButton title='Eventos Populares'/>
      </Container>
      <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ maxHeight: 60, paddingBottom: 80 }}
        >
          <Container row={true} style={{ paddingRight: 10, marginTop: 20 }}>
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

      <ScrollView style={{ width: '100%' }}>
          <Container style={{ paddingBottom: '30%' }}>
            {eventos.map((evento) => (
              <SimpleEventCard
                key={evento.id}
                eventName={evento.nome}
                eventDate={evento.data}
                style={{ marginBottom: 20 }}
              />
            ))}
          </Container>
        </ScrollView>
    </FullPage>
  )
}
