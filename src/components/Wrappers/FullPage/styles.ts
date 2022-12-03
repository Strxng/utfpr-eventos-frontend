import styled from 'styled-components/native'
import { ThemeProps } from '../../../../theme'

export const ContentContainer = styled.View`
  display: flex;
  min-height: 100%;
  width: 100%;
  padding: 0 20px;
  background-color: ${(props: ThemeProps) => props.theme.colors.background};
  align-items: center;
`
