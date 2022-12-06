import { NavigationHeader } from 'components/Headers'
import { Icon } from 'components/Icon'
import { TextRegular, TextMedium } from 'components/Texts'
import { Container, FullPage } from 'components/Wrappers'
import { useUserContext } from 'contexts/userContext'
import { useToast } from 'hooks/useToast'
import React, { useEffect, useState } from 'react'
import { Switch } from 'react-native'
import { findThemeStore, saveThemeStore } from 'storage/configStorage'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../theme'
import { OptionsContainer, UserPhoto } from './styles'

export const Profile = (): JSX.Element => {
  const [darkModeActive, setDarkModeActive] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { user } = useUserContext()
  const { colors, font } = useTheme() as ThemeTypeProps
  const { notifyError, notifySuccess } = useToast()

  useEffect(() => {
    setIsLoading(true)

    findThemeStore().then((theme) => {
      setIsLoading(false)
      if (theme === 'dark') {
        setDarkModeActive(true)
      } else {
        setDarkModeActive(false)
      }
    }).catch(() => {
      setIsLoading(false)
      notifyError('Falha ao carregar o tema')
    })
  }, [])

  return (
    <FullPage spaceTop={true} isLoading={isLoading}>
      <Container>
        <NavigationHeader logout={true} />
      </Container>

      <UserPhoto />
      <TextMedium size={font.sizes.extraLarge} style={{ marginTop: 20 }}>{user?.name ?? 'Nome do usuário'}</TextMedium>
      <TextRegular size={font.sizes.medium} style={{ marginTop: 5 }}>{user?.course ?? 'Nome do curso'}</TextRegular>

      <OptionsContainer>
        <Container row={true} style={{ alignItems: 'center', height: 40 }}>
          <Icon name='user' size={font.sizes.medium} color={colors.textPrimary} style={{ width: font.sizes.medium }} />
          <TextRegular size={font.sizes.medium} style={{ marginLeft: 20 }}>Editar Perfil</TextRegular>
        </Container>

        <Container row={true} style={{ alignItems: 'center', marginTop: 20, height: 40 }}>
          <Icon name='folder' size={font.sizes.medium} color={colors.textPrimary} style={{ width: font.sizes.medium }} />
          <TextRegular size={font.sizes.medium} style={{ marginLeft: 20 }}>Certificados</TextRegular>
        </Container>

        <Container row={true} style={{ alignItems: 'center', marginTop: 20, height: 40 }}>
          <Icon name='light' size={font.sizes.medium} color={colors.textPrimary} style={{ width: font.sizes.medium }} />
          <TextRegular size={font.sizes.medium} style={{ marginLeft: 20 }}>Tema escuro</TextRegular>
          <Switch
            style={{ justifyContent: 'center', marginLeft: 15 }}
            thumbColor={'#fff'}
            trackColor={{ false: colors.lightBackground, true: colors.success }}
            value={darkModeActive}
            onValueChange={(option) => {
              setIsLoading(true)
              setDarkModeActive(option)

              const successMsg = 'Tema alterado com sucesso. Reinicie o app'
              const errMsg = 'Erro ao aplicar o novo tema, tente novamente'

              if (option) {
                saveThemeStore('dark')
                  .then(() => {
                    setIsLoading(false)
                    notifySuccess(successMsg)
                  })
                  .catch(() => {
                    setIsLoading(false)
                    notifyError(errMsg)
                  })
              } else {
                saveThemeStore('light')
                  .then(() => {
                    setIsLoading(false)
                    notifySuccess(successMsg)
                  })
                  .catch(() => {
                    setIsLoading(false)
                    notifyError(errMsg)
                  })
              }
            }}>
          </Switch>
        </Container>
      </OptionsContainer>

    </FullPage >
  )
}
