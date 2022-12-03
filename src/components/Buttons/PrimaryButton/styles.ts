import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const ButtonContainer = styled.View`
  padding: 0 50px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }: ThemeType) => theme.colors.btnPrimary};
  height: 45px;
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  color: ${({ theme }: ThemeType) => theme.colors.textSecondary};
  font-family: ${({ theme }: ThemeType) => theme.font.families.medium};
  font-size: ${({ theme }: ThemeType) => `${theme.font.sizes.small}px`};
  text-align: center;
`
