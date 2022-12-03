import styled from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'
import { ThemeType } from '../../../../theme'

export const Input = styled(TextInputMask)`
  display: flex;
  width: 100%;
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  border-radius: 10px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
  font-family: ${({ theme }: ThemeType) => theme.font.families.regular};
  font-size: ${({ theme }: ThemeType) => `${theme.font.sizes.small}px`};
`
