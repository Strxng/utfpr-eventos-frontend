import React from 'react'
import { TextRegular } from 'components/Texts'
import { truncateString } from '../utils'
import { Container } from './styles'

interface SmallTextCardProps {
  text: string
  selected: boolean
  style: {}
}

export const SmallTextCard = ({ text, selected = false, style }: SmallTextCardProps): JSX.Element => {
  return (
    <Container style={{ ...style, backgroundColor: selected ? '#f8c404' : '#282424' }}>
      <TextRegular size={12}>{truncateString({ string: text, limit: 18 })}</TextRegular>
    </Container>
  )
}
