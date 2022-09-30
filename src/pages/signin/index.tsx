import React from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { TextRegular, TextMedium } from 'components/Texts'
import { InputWithIcon } from 'components/Inputs'
import { PrimaryButton, OutlinedButton } from 'components/Buttons'

import { FormContainer } from './styles'

interface SignInProps {
  navigation: any
}

export const SignIn = ({ navigation }: SignInProps): JSX.Element => {
  return (
    <FullPage center={true}>
      <Container>
        <TextRegular size={25}>Olá!</TextRegular>
        <TextMedium size={30}>Faça seu login</TextMedium>

        <FormContainer>
          <InputWithIcon placeholder={'E-mail ou RA'} iconName={'assignment'}/>
          <InputWithIcon placeholder={'Senha'} iconName={'padlock'} style={{ marginTop: 25 }}/>

          <TextRegular size={12} style={{ marginTop: 20 }}>Esqueci minha senha</TextRegular>
          <PrimaryButton
            text={'Entrar'}
            onPress={() => {
              navigation.navigate('Home')
            }}
            style={{ marginTop: 20 }}
          />

          <OutlinedButton
            text={'Criar uma conta'}
            onPress={() => {
              navigation.navigate('SignUp')
            }}
            style={{ marginTop: 20 }}/>
        </FormContainer>
      </Container>
    </FullPage>
  )
}
