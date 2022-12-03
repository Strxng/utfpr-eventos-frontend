import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: ThemeType) => theme.colors.btnColored};
  height: 60px;
  border-radius: 18px;
`

export const ButtonText = styled.Text`
  color: white;
  font-family: ${({ theme }: ThemeType) => theme.font.families.bold};
  font-size: ${({ theme }: ThemeType) => `${theme.font.sizes.medium}px`};
  text-align: center;
`
