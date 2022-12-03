import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const Container = styled.View`
  height: 200px;
  border-radius: 18px;
`
export const Footer = styled.View`
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  height: 75px;
  margin-top: auto;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 10px;
`

export const LocaleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`

export const DateContainer = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 28px;
  width: 100px;
  padding: 0px 10px;
  border-radius: 12px;
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
`
