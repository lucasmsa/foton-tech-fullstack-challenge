import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AuthorText, BookInformationContainer, Container, CoverImage, CoverImageContainer, TitleText } from './styles'

export interface BookProps {
  id: string;
  name: string;
  author: string;
  imageUrl: string | null;
}

const Book = ({ id, author, imageUrl, name }: BookProps) => {
  const navigation = useNavigation()

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Details', { id })}>
        <CoverImageContainer>
          <CoverImage source={imageUrl ? { uri: imageUrl } : require('../../assets/bookCover/small-cover.png')} />
        </CoverImageContainer>
        <BookInformationContainer>
          <TitleText>{name}</TitleText>
          <AuthorText>by {author}</AuthorText>
        </BookInformationContainer>
      </TouchableOpacity>
    </Container>
  )
}

export default Book