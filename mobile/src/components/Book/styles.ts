import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
`

export const CoverImageContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
`

export const CoverImage = styled.Image`
  width: 99px;
  height: 153px;
  border-radius: 4px; 
`

export const BookInformationContainer = styled.View`
  margin-top: 9px;
`

export const TitleText = styled.Text`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: rgba(49, 49, 49, 0.8);
  max-width: 100px;
  margin-bottom: 5px;
`

export const AuthorText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  max-width: 100px;
  color: rgba(49, 49, 49, 0.8);
`