import styled from 'styled-components/native'

export const FormContainer = styled.View`
  margin-top: 50px;
  padding: 0 5px;
`

export const ScrollContainer = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center'
  }
}))`
  width: 100%;
`
