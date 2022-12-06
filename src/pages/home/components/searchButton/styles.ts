import styled from 'styled-components/native'
import { ThemeType } from '../../../../../theme'

export const StyledButton = styled.TouchableOpacity`
  display: flex;
  width: 100%
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  justify-content: center;
  height: 60px;
  border-radius: 10px;
`
