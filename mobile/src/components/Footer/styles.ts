import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  height: 59px;
  align-items: center;
  background: #fff;
  margin-top: auto;
`

export const OptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OptionContainerText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  margin-top: 10px;
  color: #BFBEBF;
`

export const OptionContainerPlusText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #BFBEBF;
`

export const PlusSign = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  margin-top: -16px;
  color: #BFBEBF;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#54565A"
})`
  color: black;
`