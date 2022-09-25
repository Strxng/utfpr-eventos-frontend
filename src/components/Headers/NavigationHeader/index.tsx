import React from 'react'
import { TextMedium } from 'components/Texts'
import { TouchableOpacity } from 'react-native'

import { Container, Column, StyledIcon } from './styles'
import { useNavigation } from '@react-navigation/native'

interface NavigationHeaderProps {
  title?: string
  backButton?: boolean
  logout?: boolean
}

export const NavigationHeader = ({
  title,
  backButton = false,
  logout = false
}: NavigationHeaderProps): JSX.Element => {
  const { goBack } = useNavigation()

  const handleGoBack = (): void => {
    goBack()
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
          <TextMedium size={20}>{title}</TextMedium>
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
