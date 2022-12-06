import styled from 'styled-components/native'
import { ThemeType } from '../../../theme'

export const Footer = styled.View`
  margin-top: auto;
  height: auto;
  width: 100%;
  padding: 0px 20px 50px 20px;
`

export const BgImage = styled.ImageBackground`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }: ThemeType) => theme.colors.background}
`

export const LogoImage = styled.Image`
  height: 160px;
  width: 400px;
  margin-top: 80px;
`
