import styled from 'styled-components/native'
import { ThemeProps } from '../../../../theme'

export const ContentContainer = styled.View`
  display: flex;
  width: 100%;
  background-color: ${(props: ThemeProps) => props.theme.colors.background};
`
