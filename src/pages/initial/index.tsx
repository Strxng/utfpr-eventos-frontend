import React from 'react'
import { FullPage } from 'components/Wrappers'
import { BgImage, LogoImage, Footer } from './styles'
import { Asset } from 'expo-asset'
import { LargeButton } from 'components/Buttons'
import { TextRegular } from 'components/Texts'
import bgInitialPageImage from '../../../assets/images/bg-initial-page.jpg'
import utfprLogo from '../../../assets/images/utfpr-logo.png'

interface InitialProps {
  navigation?: any
}

export const Initial = ({ navigation }: InitialProps): JSX.Element => {
  return (
    <FullPage center={true}>
      <BgImage source={{ uri: Asset.fromModule(bgInitialPageImage).uri }} imageStyle={{ opacity: 0.2 }}>
        <LogoImage source={{ uri: Asset.fromModule(utfprLogo).uri }} style={{ resizeMode: 'stretch' }} />
        <Footer>
          <LargeButton
            text={'Descubra agora!'}
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          />

          <TextRegular size={13} style={{ marginTop: 20 }}>
            Nosso app foi desenvolvido para você ficar ligado em
            todos os eventos que acontecem na
          </TextRegular>
          <TextRegular size={13}>UTFPR - Dois Vizinhos</TextRegular>
        </Footer>
      </BgImage>
    </FullPage>
  )
}
