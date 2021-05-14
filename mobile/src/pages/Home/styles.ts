import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
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