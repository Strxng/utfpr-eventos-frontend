import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: black;
  width: 100%;
  padding-bottom: 20px;
`

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`

export const Circle = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: white;
`
