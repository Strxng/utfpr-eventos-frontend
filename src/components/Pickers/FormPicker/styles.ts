import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'
import { Icon } from '../../Icon'

export const boxStyle = {
  width: '100%',
  height: 50,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 10
}

export const boxTextStyle = {
  lineHeight: 25
}

export const dropdownItemStyle = {}

export const dropdownTextStyle = {
  lineHeight: 25
}

export const StyledIcon = styled(Icon)`
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
  position: absolute;
  right: 10px;
  top: 10px;
`
