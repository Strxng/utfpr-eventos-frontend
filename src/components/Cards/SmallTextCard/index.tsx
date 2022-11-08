import React from 'react'
import { TextRegular } from 'components/Texts'
import { truncateString } from '../utils'

import { Container } from './styles'
import { GestureResponderEvent } from 'react-native'

interface SmallTextCardProps {
  text: string
  selected: boolean
  style: {}
  onPress?: (event: GestureResponderEvent) => void
}

export const SmallTextCard = ({ text, selected = false, style, onPress = () => {} }: SmallTextCardProps): JSX.Element => {
  return (
    <Container style={{ ...style, backgroundColor: selected ? '#f8c404' : '#282424' }} onTouchStart={onPress}>
      <TextRegular size={12}>{truncateString({ string: text, limit: 18 })}</TextRegular>
    </Container>
  )
}
