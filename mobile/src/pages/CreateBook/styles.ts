import CreateBookFieldInput from '../../components/FieldInput'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefaf6;
  height: 100%;
`

export const ContainerScrollView = styled.ScrollView`
  width: 100%;
`

export const WelcomeContainer = styled.View`
  display: flex;
  width: 336px;
  margin-top: 30px;
  margin-bottom: 58px;
  align-self: center;
`

export const AddBookText = styled.Text`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FF6978;
`


export const FieldNameText = styled.Text`
  font-family: SF Pro Text;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export const Optional = styled.Text`
font-style: italic;
color: rgba(49, 49, 49, 0.6);
`

export const FieldsContainer = styled.View`
  display: flex;
  flex-direction column;
`

export const FieldOptionContainer = styled.View`
  margin-top: 24px;
  align-self: center;
`


export const FieldInput = styled(CreateBookFieldInput)``