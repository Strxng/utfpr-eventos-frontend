import styled from 'styled-components/native'
import { Icon } from '../../Icon'

export const boxStyle = {
  width: '50%',
  height: 40,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: 'black',
  borderRadius: 50,
  border: '1px solid #252525'
}

export const boxTextStyle = {
  lineHeight: 15,
  color: 'white',
  fontFamily: 'PlusJakartaSans-Regular',
  fontSize: 15
}

export const dropdownStyle = {
  backgroundColor: 'black',
  fontSize: 16,
  width: '50%'
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
  top: 5px;
`
