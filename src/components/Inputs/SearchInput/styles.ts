import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'
import { Icon } from '../../Icon'

export const Container = styled.View`
`

export const StyledIcon = styled(Icon)`
  color: #b7b7b7;
  position: absolute;
  left: 15px;
  top: 15px;
`
export const Input = styled.TextInput`
  display: flex;
  width: 100%;
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  border-radius: 10px;
  height: 55px;
  padding-left: 50px;
  padding-right: 10px;
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
  font-family:  ${({ theme }: ThemeType) => theme.font.families.regular};
  font-size:  ${({ theme }: ThemeType) => `${theme.font.sizes.small}px`};
`
