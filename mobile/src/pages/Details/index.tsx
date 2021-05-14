import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'react-native'
import { Circle, Container, DarkBlueBall, HeaderMask, HeaderContainer, PinkBall, SquigglyOvalBottom, SquigglyOvalTop, BallsContainer, CoverImageContainer, CoverImage, DetailsContainer } from './styles'
import api from '../../services/api'
import { BookProps } from '../../components/Book'
import { bookDetailsPlaceholder } from '../../utils/bookDetailsPlaceholder'

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
        <SquigglyOvalTop />
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
    </Container >)
}

export default Details