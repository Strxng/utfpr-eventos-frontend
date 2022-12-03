import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const ContentContainer = styled.View`
  display: flex;
  width: 100%;
  background-color: ${({ theme }: ThemeType) => theme.colors.background};
`
