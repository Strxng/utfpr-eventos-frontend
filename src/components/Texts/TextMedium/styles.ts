import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'

export const StyledText = styled.Text`
  font-family: ${({ theme }: ThemeType) => theme.font.families.medium};
  text-align: center;
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
`
