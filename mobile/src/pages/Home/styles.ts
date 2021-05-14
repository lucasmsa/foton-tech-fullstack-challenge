import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefaf6;
  height: 100%;
`

export const WelcomeContainer = styled.View`
  display: flex;
  width: 336px;
  margin-top: 30px;
  margin-bottom: 38px;
`

export const WelcomeText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
`

export const NameText = styled.Text`
  color: #fe6a78;
`

export const BooksScrollable = styled.ScrollView`
  width: 360px;
`

export const BooksContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const NoBooksFoundText = styled.Text`
  font-size: 16px;
  font-style: italic;
  color: rgba(49, 49, 49, 0.6);
  margin-left: 14px;
`

export const LoadMoreButton = styled(RectButton)`
  width: 100px;
  height: 60px;
  background: #fe6a78;
  border-radius: 16px;
`