import styled from 'styled-components/native'
import { ThemeType } from '../../../../theme'
import { Icon } from '../../Icon'

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`

export const StyledIcon = styled(Icon)`
  color: ${({ theme }: ThemeType) => theme.colors.textPrimary};
`

export const Column = styled.View``
