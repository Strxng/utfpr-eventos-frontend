import React from 'react'
import { TextRegular } from 'components/Texts'
import { TouchableOpacity } from 'react-native'

import { Container, Column, StyledIcon } from './styles'

interface NavigationHeaderProps {
  navigation: any
  title?: string
  backButton: boolean
  logout?: boolean
}

export const NavigationHeader = ({
  navigation,
  title,
  backButton = false,
  logout = false
}: NavigationHeaderProps): JSX.Element => {
  const handleGoBack = (): void => {
    navigation.goBack()
  }

  return (
    <Container>
      <Column style={{ width: '10%' }}>
        {backButton &&
          <TouchableOpacity onPress={handleGoBack}>
            <StyledIcon name={'arrow-left'} size={30}/>
          </TouchableOpacity>
        }
      </Column>

      {title &&
        <Column style={{ width: '80%' }}>
          <TextRegular size={25}>{title}</TextRegular>
        </Column>
      }

      <Column style={{ width: '10%', alignItems: 'flex-end' }}>
        {logout &&
          <TouchableOpacity>
            <StyledIcon name={'logout'} size={30}/>
          </TouchableOpacity>
        }
      </Column>
    </Container>
  )
}
