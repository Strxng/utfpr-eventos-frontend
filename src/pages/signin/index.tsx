import React, { useCallback } from 'react'
import { FullPage, Container } from 'components/Wrappers'
import { TextRegular, TextMedium } from 'components/Texts'
import { InputWithIcon } from 'components/Inputs'
import { PrimaryButton, OutlinedButton } from 'components/Buttons'
import { FormContainer } from './styles'

import { Formik, Field } from 'formik'
import { authService } from 'services/userService'
import { useUserContext } from 'contexts/userContext'
import { signinSchema } from './validationSchema'
import { useToast } from 'hooks/useToast'
import { useState } from 'react'
interface SignInProps {
  navigation: any
}

interface SubmitParams {
  email: string
  password: string
}

export const SignIn = ({ navigation }: SignInProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setUser } = useUserContext()
  const { notifyError } = useToast()

  const onSubmit = useCallback(({ email, password }: SubmitParams) => {
    setIsLoading(true)

    authService({ email, password }).then((user) => {
      setUser(user)
      setIsLoading(false)
      navigation.navigate('Home')
    }).catch((err) => {
      setIsLoading(false)
      notifyError(err.message)
    })
  }, [])

  return (
    <FullPage center={true} isLoading={isLoading}>
      <Container>
        <TextRegular size={25}>Olá!</TextRegular>
        <TextMedium size={30}>Faça seu login</TextMedium>

        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={onSubmit}
          validationSchema={signinSchema}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <FormContainer>
              <Field
                placeholder={'Email'}
                iconName={'assignment'}
                value={values.email}
                onChangeText={handleChange('email')}
                as={InputWithIcon}
              />
              {errors.email && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.email}</TextRegular>}

              <Field
                placeholder={'Senha'}
                iconName={'padlock'}
                style={{ marginTop: 25 }}
                value={values.password}
                onChangeText={handleChange('password')}
                type='password'
                as={InputWithIcon}
              />
              {errors.password && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.password}</TextRegular>}

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
                style={{ marginTop: 20 }} />
            </FormContainer>
          )}
        </Formik>
      </Container>
    </FullPage>
  )
}
