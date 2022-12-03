import React, { useCallback, useEffect, useState } from 'react'
import { FullPage, Container, MarginWrapper } from 'components/Wrappers'
import { TextRegular, TextMedium } from 'components/Texts'
import { DefaultInput } from 'components/Inputs'
import { PrimaryButton } from 'components/Buttons'
import { FormPicker } from 'components/Pickers'
import { ScrollView } from 'react-native'
import { NavigationHeader } from 'components/Headers'

import { FormContainer } from './styles'
import { Field, Formik } from 'formik'
import { signupSchema } from './validationSchema'
import { SignupScreenDataResponse, signupScreenDataService } from 'services/screenDataService'
import { InputWithMask } from 'components/Inputs/InputWithMask'
import moment from 'moment'
import { signupService } from 'services/userService'
import { useUserContext } from 'contexts/userContext'
import { useToast } from 'hooks/useToast'

interface SignUpProps {
  navigation: any
}

interface FormData {
  name: string
  email: string
  academicRegistry: string
  password: string
  confirmPassword: string
  genreId: string
  campusId: string
  courseId: string
  phone: string
  birthdate: string
}

export const SignUp = ({ navigation }: SignUpProps): JSX.Element => {
  const [screenData, setScreenData] = useState<SignupScreenDataResponse | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setUser } = useUserContext()
  const { notifyError } = useToast()

  const getCourseOptions = (campusId: string): any[] => {
    if (!campusId) return []
    const campus = screenData?.campus.find((campus) => campus.id === campusId)
    return campus?.courses ?? []
  }

  const onSubmit = useCallback((values: FormData) => {
    setIsLoading(true)

    const birthdate = moment(values.birthdate, 'DD/MM/YYYY').toDate()

    signupService({
      ...values,
      birthdate
    }).then((user) => {
      setIsLoading(false)
      setUser(user)
      navigation.navigate('Home')
    }).catch((err) => {
      setIsLoading(false)
      notifyError(err.message)
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)

    signupScreenDataService().then((screenData) => {
      setScreenData(screenData)
      setIsLoading(false)
    }).catch((err) => {
      notifyError(err.message)
      setIsLoading(false)
    })
  }, [])

  return (
    <FullPage center={true} spaceTop isLoading={isLoading}>
      <Container>
        <NavigationHeader
          backButton
        />
      </Container>
      <ScrollView style={{ width: '100%' }}>
        <Container style={{ paddingTop: '5%', paddingBottom: '30%' }}>
          <TextRegular size={25}>Olá!</TextRegular>
          <TextMedium size={30}>Cadastre-se</TextMedium>

          <Formik
            initialValues={{
              name: '',
              email: '',
              academicRegistry: '',
              password: '',
              confirmPassword: '',
              genreId: '',
              campusId: '',
              courseId: '',
              phone: '',
              birthdate: ''
            }}
            onSubmit={onSubmit}
            validationSchema={signupSchema}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <FormContainer>
                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Nome completo'}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      autoCapitalize={'words'}
                      as={DefaultInput}
                    />
                    {errors.name && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.name}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Email'}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      as={DefaultInput}
                    />
                    {errors.email && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.email}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Ra'}
                      value={values.academicRegistry}
                      onChangeText={handleChange('academicRegistry')}
                      as={DefaultInput}
                    />
                    {errors.academicRegistry && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.academicRegistry}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Telefone'}
                      value={values.phone}
                      onChangeText={handleChange('phone')}
                      type={'cel-phone'}
                      options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                      }}
                      as={InputWithMask}
                    />
                    {errors.phone && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.phone}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Data de nascimento'}
                      value={values.birthdate}
                      onChangeText={handleChange('birthdate')}
                      type={'datetime'}
                      options={{
                        mask: 'DD/MM/YYYY'
                      }}
                      as={InputWithMask}
                    />
                    {errors.birthdate && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.birthdate}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      type={'password'}
                      placeholder={'Senha'}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      as={DefaultInput}
                    />
                    {errors.password && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.password}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      type={'password'}
                      placeholder={'Confirmar senha'}
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      as={DefaultInput}
                    />
                    {errors.confirmPassword && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.confirmPassword}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Gênero'}
                      options={screenData?.genres ?? []}
                      displayColumn={'name'}
                      valueColumn={'id'}
                      handleChange={handleChange('genreId')}
                      as={FormPicker}
                    />
                    {errors.genreId && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.genreId}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Seu campus'}
                      options={screenData?.campus ?? []}
                      displayColumn={'name'}
                      valueColumn={'id'}
                      handleChange={handleChange('campusId')}
                      as={FormPicker}
                    />
                    {errors.campusId && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.campusId}</TextRegular>}
                  </>
                </MarginWrapper>

                <MarginWrapper>
                  <>
                    <Field
                      placeholder={'Seu curso'}
                      options={getCourseOptions(values.campusId)}
                      displayColumn={'name'}
                      valueColumn={'id'}
                      handleChange={handleChange('courseId')}
                      as={FormPicker}
                    />
                    {errors.courseId && <TextRegular size={10} style={{ color: '#ff6d6d', textAlign: 'left' }}>{errors.courseId}</TextRegular>}
                  </>
                </MarginWrapper>

                <PrimaryButton
                  text={'Pronto'}
                  onPress={() => {
                    handleSubmit()
                  }}
                />
              </FormContainer>
            )}
          </Formik>
        </Container>
      </ScrollView>
    </FullPage>
  )
}
