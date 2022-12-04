import styled from 'styled-components/native'
import { ThemeType } from '../../../theme'

export const UserPhoto = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
`

export const OptionsContainer = styled.View`
  margin-top: 50px;
  width: 100%;
  padding: 0px 20px;
`
