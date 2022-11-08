import { NavigationHeader } from 'components/Headers'
import { TextRegular, TextMedium } from 'components/Texts'
import { Container, FullPage } from 'components/Wrappers'
import { useUserContext } from 'contexts/userContext'
import React from 'react'
import { UserPhoto } from './styles'

export const Profile = (): JSX.Element => {
  const { user } = useUserContext()

  return (
    <FullPage spaceTop={true}>
      <Container>
        <NavigationHeader logout={true}/>
      </Container>

      <UserPhoto />
      <TextMedium size={20} style={{ marginTop: 20 }}>{user?.name ?? 'Nome do usuário'}</TextMedium>
      <TextRegular size={14} style={{ marginTop: 5 }}>{user?.course ?? 'Nome do curso'}</TextRegular>
    </FullPage>
  )
}
