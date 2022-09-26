import React from 'react'
import { FullPage, Container, InputWrapper } from 'components/Wrappers'
import { TextRegular, TextMedium } from 'components/Texts'
import { DefaultInput } from 'components/Inputs'
import { PrimaryButton } from 'components/Buttons'
import { FormPicker } from 'components/Pickers'
import { ScrollView } from 'react-native'
import { NavigationHeader } from 'components/Headers'

import { FormContainer } from './styles'

interface SignUpProps {
  navigation: any
}

export const SignUp = ({ navigation }: SignUpProps): JSX.Element => {
  return (
    <FullPage center={true} spaceTop>
      <Container>
        <NavigationHeader
          backButton
        />
      </Container>
      <ScrollView style={{ width: '100%' }}>
        <Container style={{ paddingTop: '5%', paddingBottom: '30%' }}>
          <TextRegular size={25}>Olá!</TextRegular>
          <TextMedium size={30}>Cadastre-se</TextMedium>

          <FormContainer>
            <InputWrapper>
              <DefaultInput placeholder={'Nome'} value={''}/>
            </InputWrapper>

            <InputWrapper>
              <DefaultInput placeholder={'Sobrenome'} value={''}/>
            </InputWrapper>

            <InputWrapper>
              <DefaultInput placeholder={'E-mail'} value={''}/>
            </InputWrapper>

            <InputWrapper>
              <DefaultInput placeholder={'RA'} value={''}/>
            </InputWrapper>

            <InputWrapper>
              <DefaultInput placeholder={'Senha'} value={''}/>
            </InputWrapper>

            <InputWrapper >
              <FormPicker placeholder={'Seu curso'}/>
            </InputWrapper>

            <PrimaryButton text={'Pronto!'} onPress={() => { navigation.navigate('Home') }}/>

          </FormContainer>
        </Container>
      </ScrollView>
    </FullPage>
  )
}
