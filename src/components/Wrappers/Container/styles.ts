import styled from 'styled-components/native'
import { ThemeProps } from '../../../../theme'

export const ContentContainer = styled.View`
  display: flex;
  width: 100%;
  padding: 0 20px;
  background-color: ${(props: ThemeProps) => props.theme.colors.background};
`
