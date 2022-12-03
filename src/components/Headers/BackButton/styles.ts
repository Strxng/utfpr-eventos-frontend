import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const BackButtonContainer = styled.View`
  background-color: ${({ theme }: ThemeType) => theme.colors.background};
  opacity: 0.7;
  height: 35px;
  width: 35px;
  border-radius: 20px;
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 1;
  justify-content: center;
  align-items: center;
`
