import styled from 'styled-components/native'
import { Icon } from '../../Icon'

export const boxStyle = {
  width: '100%',
  height: 50,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: '#black',
  borderRadius: 10,
  border: '1px solid #252525'
}

export const boxTextStyle = {
  lineHeight: 25,
  color: 'white',
  fontFamily: 'PlusJakartaSans-Regular',
  fontSize: 16
}

export const dropdownStyle = {
  backgroundColor: 'black',
  fontSize: 16
}

export const dropdownItemStyle = {}

export const dropdownTextStyle = {
  lineHeight: 25,
  color: 'white',
  fontFamily: 'PlusJakartaSans-Regular',
  fontSize: 16
}

export const StyledIcon = styled(Icon)`
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
`
