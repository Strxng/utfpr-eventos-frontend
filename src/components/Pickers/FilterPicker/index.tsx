import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import { View } from 'react-native'

import { boxStyle, dropdownTextStyle, boxTextStyle, dropdownStyle, dropdownItemStyle, StyledIcon } from './styles'

interface FilterPickerProps {
  placeholder: string
  style?: {}
}

export const FilterPicker = ({ placeholder, style }: FilterPickerProps): JSX.Element => {
  const [, setSelectedValue] = useState(0)
  const [arrow, setArrow] = useState('kb-arrow-down')

  const handleTouch = (): void => {
    arrow === 'kb-arrow-down' ? setArrow('kb-arrow-up') : setArrow('kb-arrow-down')
  }

  const courses = [
    { key: '1', value: 'Mais proximo' },
    { key: '2', value: 'Mais distante' },
  ]

  return (
    <View onTouchStart={() => handleTouch()}>
      <SelectList
        placeholder={placeholder}
        setSelected={setSelectedValue}
        data={courses}
        search={false}
        boxStyles={{ ...boxStyle, ...style }}
        inputStyles={boxTextStyle}
        dropdownStyles={dropdownStyle}
        dropdownTextStyles={dropdownTextStyle}
        dropdownItemStyles={dropdownItemStyle}
        arrowicon={
          <StyledIcon name={arrow} size={25}/>}
      />
    </View>
  )
}
