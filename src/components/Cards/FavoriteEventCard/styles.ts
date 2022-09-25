import styled from 'styled-components/native'

export const ImageContainer = styled.View`
  width: 110px;
  height: 100px;
  border-radius: 18px;
  background-color: #d9d9d9;
`

export const DateContainer = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 28px;
  width: 90px;
  padding: 0px 10px;
  border-radius: 12px;
  background-color: #b9b9b9;
  justify-content: center;
`

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: left;
`

export const IconWithTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const IconButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 25px;
`

export const CardButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #252525;
  height: 100px;
  width: 100%;
  border-radius: 18px;
`
