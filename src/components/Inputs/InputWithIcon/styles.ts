import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'
import { Icon } from '../../Icon'

export const Container = styled.View`
`

export const Input = styled.TextInput`
  display: flex;
  width: 100%;
  background-color: ${({ theme }: ThemeType) => theme.colors.lightBackground};
  border-radius: 10px;
  height: 50px;
  padding-left: 10px;
  padding-right: 40px;
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
  font-family: ${({ theme }: ThemeType) => theme.font.families.regular};
  font-size: ${({ theme }: ThemeType) => `${theme.font.sizes.small}px`};
`

export const StyledIcon = styled(Icon)`
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
  position: absolute;
  right: 10px;
  top: 10px;
`
