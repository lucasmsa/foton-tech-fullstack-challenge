import { RectButton } from 'react-native-gesture-handler'
import CreateBookFieldInput from '../../components/FieldInput'
import styled from 'styled-components/native'
import { KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

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
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FF6978;
`


export const FieldNameText = styled.Text`
font-size: 16px;
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