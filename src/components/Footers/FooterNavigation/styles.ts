import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const Container = styled.View`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  display: flex;
  flex-direction: row;
  padding: 20px 50px 20px 50px;
  justify-content: space-between;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
`
