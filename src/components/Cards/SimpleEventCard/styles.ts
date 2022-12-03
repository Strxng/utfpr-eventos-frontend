import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const Container = styled.View`
  height: 250px;
  border-radius: 30px;
`
export const Footer = styled.View`
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  height: 75px;
  margin-top: auto;
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  padding: 10px 20px;
`

export const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`
