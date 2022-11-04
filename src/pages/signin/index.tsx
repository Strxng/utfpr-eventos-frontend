import React from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { TextRegular, TextMedium } from 'components/Texts'
import { InputWithIcon } from 'components/Inputs'
import { PrimaryButton, OutlinedButton } from 'components/Buttons'
import { FormContainer } from './styles'

import { Formik, Field } from 'formik'
import userService from '../../services/userService.js'
interface SignInProps {
  navigation: any
}

// interface FormValues {
//   emailOrRegistry: string
//   password: string
// }

export const SignIn = ({ navigation }: SignInProps): JSX.Element => {
  return (
    <FullPage center={true}>
      <Container>
        <TextRegular size={25}>Olá!</TextRegular>
        <TextMedium size={30}>Faça seu login</TextMedium>

        <Formik
          initialValues={{
            emailOrRegistry: '',
            password: ''
          }}
          onSubmit={(values) => {
            userService
              .auth(JSON.stringify({
                email: values.emailOrRegistry,
                password: values.password
              }))
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
          <FormContainer>
            <Field
              placeholder={'E-mail ou RA'}
              iconName={'assignment'}
              value={values.emailOrRegistry}
              onChangeText={handleChange('emailOrRegistry')}
              as={InputWithIcon}
            />
            <Field
              placeholder={'Senha'}
              iconName={'padlock'}
              style={{ marginTop: 25 }}
              value={values.password}
              onChangeText={handleChange('password')}
              as={InputWithIcon}
            />

            <TextRegular size={12} style={{ marginTop: 20 }}>Esqueci minha senha</TextRegular>
            <PrimaryButton
              text={'Entrar'}
              onPress={handleSubmit}
              style={{ marginTop: 20 }}
            />

            <OutlinedButton
              text={'Criar uma conta'}
              onPress={() => {
                navigation.navigate('SignUp')
              }}
              style={{ marginTop: 20 }}/>
          </FormContainer>
          )}
          </Formik>
      </Container>
    </FullPage>
  )
}
