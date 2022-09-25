import { NavigationHeader } from 'components/Headers'
import { TextRegular, TextMedium } from 'components/Texts'
import { Container, FullPage } from 'components/Wrappers'
import React from 'react'
import { UserPhoto } from './styles'

export const Profile = (): JSX.Element => {
  return (
    <FullPage spaceTop={true}>
      <Container>
        <NavigationHeader logout={true}/>
      </Container>

      <UserPhoto />
      <TextMedium size={18} style={{ marginTop: 20 }}>Nome do usuário</TextMedium>
      <TextRegular size={12} style={{ marginTop: 5 }}>Curso do usuário</TextRegular>
    </FullPage>
  )
}
