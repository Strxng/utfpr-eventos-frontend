import React from 'react'
import { TextRegular } from 'components/Texts'
import { truncateString } from '../utils'

import { Button } from './styles'
import { GestureResponderEvent } from 'react-native'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../../../theme'

interface SmallTextCardProps {
  text: string
  selected: boolean
  style?: {}
  onPress?: (event: GestureResponderEvent) => void
}

export const SmallTextCard = ({ text, selected = false, style, onPress = () => { } }: SmallTextCardProps): JSX.Element => {
  const { colors } = useTheme() as ThemeTypeProps

  return (
    <Button style={{ ...style, backgroundColor: selected ? colors.btnColored : colors.lightBackground }} onPress={onPress}>
      <TextRegular size={12}>{truncateString({ string: text, limit: 18 })}</TextRegular>
    </Button>
  )
}
