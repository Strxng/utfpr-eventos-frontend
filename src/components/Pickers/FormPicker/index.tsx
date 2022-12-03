import React from 'react'
import SelectList from 'react-native-dropdown-select-list'

import { boxStyle, dropdownTextStyle, boxTextStyle, dropdownItemStyle, StyledIcon } from './styles'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'

interface FormPickerProps {
  placeholder: string
  options: any[]
  displayColumn: string
  valueColumn: string
  handleChange: (value: any) => void
}

export const FormPicker = ({ placeholder, options = [], displayColumn = '', valueColumn = '', handleChange = () => { } }: FormPickerProps): JSX.Element => {
  const { colors, font } = useTheme() as ThemeTypeProps

  const data = options.map((option) => {
    return {
      key: option[valueColumn],
      value: option[displayColumn]
    }
  })

  return (
    <SelectList
      placeholder={placeholder}
      setSelected={handleChange}
      data={data}
      search={false}
      boxStyles={{ ...boxStyle, backgroundColor: colors.lightBackground, borderColor: 'transparent' }}
      inputStyles={{ ...boxTextStyle, color: colors.textPrimary, fontFamily: font.families.regular, fontSize: font.sizes.small }}
      dropdownTextStyles={{ ...dropdownTextStyle, color: colors.textPrimary, fontFamily: font.families.regular, fontSize: font.sizes.small }}
      dropdownItemStyles={{ ...dropdownItemStyle }}
      dropdownStyles={{ backgroundColor: colors.lightBackground, borderColor: 'transparent' }}
      arrowicon={
        <StyledIcon name={'kb-arrow-down'} size={25} />}
    />
  )
}
