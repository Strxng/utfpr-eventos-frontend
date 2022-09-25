import styled from 'styled-components/native'
import { Icon } from '../../Icon'
import { Platform } from 'react-native'

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: ${Platform.OS === 'ios' ? '80px' : 20};
  padding-bottom: 20px;
  justify-content: space-between;
`

export const StyledIcon = styled(Icon)`
  color: white;
`

export const Column = styled.View``
