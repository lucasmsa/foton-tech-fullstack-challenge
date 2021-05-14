import React from 'react'
import { AuthorText, BookInformationContainer, Container, CoverImage, CoverImageContainer, TitleText } from './styles'

export interface BookProps {
  name: string;
  author: string;
  imageUrl: string | null;
}

const Book = ({ author, imageUrl, name }: BookProps) => {
  return (
    <Container>
      <CoverImageContainer>
        <CoverImage source={imageUrl ? { uri: imageUrl } : require('../../assets/bookCover/small-cover.png')} />
      </CoverImageContainer>
      <BookInformationContainer>
        <TitleText>{name}</TitleText>
        <AuthorText>by {author}</AuthorText>
      </BookInformationContainer>
    </Container>
  )
}

export default Book