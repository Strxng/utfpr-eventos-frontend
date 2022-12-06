import React, { useRef } from 'react'
import { TextRegular } from 'components/Texts'
import { Container } from 'components/Wrappers'
import { StyledButton } from './styles'
import { Icon } from 'components/Icon'

interface SearchButtonProps {
  onPress: () => void
}

export const SearchButton = ({ onPress }: SearchButtonProps): JSX.Element => {
  const colorToSimulePlaceholder = useRef('#b7b7b7')

  return (
    <StyledButton onPress={onPress}>
      <Container row style={{ backgroundColor: 'transparent', paddingLeft: 15 }}>
        <Icon name='search' size={25} color={colorToSimulePlaceholder.current}/>
        <TextRegular style={{ paddingLeft: 10, color: colorToSimulePlaceholder.current }}>Pesquisar evento</TextRegular>
      </Container>
    </StyledButton>
  )
}
