import React, { useEffect, useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import { View } from 'react-native'

import { boxStyle, dropdownTextStyle, boxTextStyle, dropdownStyle, dropdownItemStyle, StyledIcon } from './styles'

interface FormPickerProps {
  placeholder: string
  options: any[]
  displayColumn: string
  valueColumn: string
  style?: {}
  handleChange: (value: any) => void
}

export const FormPicker = ({ placeholder, options = [], displayColumn = '', valueColumn = '', style = {}, handleChange = () => {} }: FormPickerProps): JSX.Element => {
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
      boxStyles={{ ...boxStyle, ...style }}
      inputStyles={boxTextStyle}
      dropdownStyles={dropdownStyle}
      dropdownTextStyles={dropdownTextStyle}
      dropdownItemStyles={dropdownItemStyle}
      arrowicon={
        <StyledIcon name={'kb-arrow-down'} size={25}/>}
    />
  )
}
