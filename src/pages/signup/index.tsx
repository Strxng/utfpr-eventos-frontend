import React, { useEffect, useState } from 'react'
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

interface SignUpProps {
  navigation: any
}

export const SignUp = ({ navigation }: SignUpProps): JSX.Element => {
  const [screenData, setScreenData] = useState<SignupScreenDataResponse | null>(null)

  const getCourseOptions = (campusId: string): any[] => {
    if (!campusId) return []
    const campus = screenData?.campus.find((campus) => campus.id === campusId)
    return campus?.courses ?? []
  }

  useEffect(() => {
    signupScreenDataService().then((screenData) => {
      setScreenData(screenData)
    }).catch(() => {
    })
  }, [])

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

          <Formik
          initialValues={{
            name: '',
            email: '',
            academicRegistry: '',
            password: '',
            confirmPassword: '',
            genreId: '',
            campusId: '',
            courseId: ''
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
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
