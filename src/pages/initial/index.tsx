import React from 'react'
import { BgImage, LogoImage, Footer } from './styles'
import { Asset } from 'expo-asset'
import { LargeButton } from 'components/Buttons'
import { TextRegular } from 'components/Texts'
import bgInitialPageImage from '../../../assets/images/bg-initial-page.jpg'
import logoWhite from '../../../assets/images/logo-white.png'
import logoBlack from '../../../assets/images/logo-black.png'
import { useUserContext } from 'contexts/userContext'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../theme'

interface InitialProps {
  navigation?: any
}

export const Initial = ({ navigation }: InitialProps): JSX.Element => {
  const { user } = useUserContext()
  const { name } = useTheme() as ThemeTypeProps

  return (
    <BgImage source={{ uri: Asset.fromModule(bgInitialPageImage).uri }} imageStyle={{ opacity: 0.2 }}>
      <LogoImage source={{ uri: Asset.fromModule(name === 'light' ? logoBlack : logoWhite).uri }} style={{ resizeMode: 'stretch', height: 160, width: 250 }} />
      <Footer>
        <LargeButton
          text={'Descubra agora!'}
          onPress={() => {
            if (user) {
              navigation.navigate('Home')
            } else {
              navigation.navigate('SignIn')
            }
          }}
        />

        <TextRegular size={13} style={{ marginTop: 20 }}>
          Nosso app foi desenvolvido para você ficar ligado em
          todos os eventos que acontecem na
        </TextRegular>
        <TextRegular size={13}>UTFPR - Dois Vizinhos</TextRegular>
      </Footer>
    </BgImage>
  )
}
