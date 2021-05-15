import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Circle, Container, DarkBlueBall, HeaderMask, HeaderContainer, PinkBall, SquigglyOvalBottom, SquigglyOvalTop, BallsContainer, CoverImageContainer, CoverImage, DetailsContainer, TopContainer, LeftArrow, LeftArrowContainer, BookContentsContainer, BookAuthorText, BookDescriptionText, BookTitleText, ReadingOptionsContainer, BookDescriptionContainer, ReadingOptionsBlock, BookOpen, ReadingOptionsText, Headphones, VerticalLine, Share } from './styles'
import api from '../../services/api'
import Book, { BookProps } from '../../components/Book'
import { bookDetailsPlaceholder } from '../../utils/bookDetailsPlaceholder'
import { useNavigation } from '@react-navigation/native'

interface IBook extends Omit<BookProps, 'bookDetails'> {
  description: string;
}

interface DetailsProps {
  route: {
    params: {
      id: string
    }
  }
}

const Details = ({ route }: DetailsProps) => {
  const navigation = useNavigation()
  const [book, setBook] = useState<IBook>(bookDetailsPlaceholder)

  useEffect(() => {
    async function loadBookById(): Promise<void> {
      const response = await api.get(`/${route.params.id}`)
      setBook(response.data)
    }
    loadBookById();
  }, [book])

  return (
    <Container>
      <HeaderMask />
      <HeaderContainer>
        <TopContainer>
          <LeftArrowContainer activeOpacity={0.4} onPress={() => navigation.goBack()} >
            <LeftArrow />
          </LeftArrowContainer>
          <SquigglyOvalTop />
        </TopContainer>
        <DetailsContainer>
          <BallsContainer>
            <PinkBall />
            <DarkBlueBall />
          </BallsContainer>
          <CoverImageContainer>
            <CoverImage source={book.imageUrl ? { uri: book.imageUrl } : require('../../assets/bookCover/large-cover.png')} />
          </CoverImageContainer>
          <Circle />
          <SquigglyOvalBottom width={24} />
        </DetailsContainer>
      </HeaderContainer>
      <BookContentsContainer>
        <BookTitleText>{book.name}</BookTitleText>
        <BookAuthorText>{book.author}</BookAuthorText>
        <BookDescriptionContainer>
          <BookDescriptionText>{book.description}</BookDescriptionText>
        </BookDescriptionContainer>
      </BookContentsContainer>
      <ReadingOptionsContainer>
        <ReadingOptionsBlock>
          <BookOpen />
          <ReadingOptionsText>Read</ReadingOptionsText>
        </ReadingOptionsBlock>
        <VerticalLine />
        <ReadingOptionsBlock>
          <Headphones />
          <ReadingOptionsText>Listen</ReadingOptionsText>
        </ReadingOptionsBlock>
        <VerticalLine />
        <ReadingOptionsBlock>
          <Share />
          <ReadingOptionsText>Share</ReadingOptionsText>
        </ReadingOptionsBlock>
      </ReadingOptionsContainer>
    </Container >)
}

export default Details