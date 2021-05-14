import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import { BooksContainer, BooksScrollable, Container, NameText, WelcomeContainer, WelcomeText } from './styles'
import Book, { BookProps } from '../../components/Book'
import Footer from '../../components/Footer'
import api from '../../services/api'

interface Book extends BookProps {
  id: string;
  description: string;
}

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[] | []>([])

  useEffect(() => {
    async function loadBooks(): Promise<void> {
      await api.get('/').then(response => {
        setBooks(response.data)
      });
    }

    loadBooks();
  })

  return (
    <Container>
      <Search />
      <WelcomeContainer>
        <WelcomeText>
          Hi, <NameText>Mucas Loreira</NameText> 👋
        </WelcomeText>
      </WelcomeContainer>
      <BooksScrollable>
        <BooksContainer>
          {books.map(({ id, author, name, description, imageUrl }: Book) => (
            <Book key={id} author={author} name={name} imageUrl={imageUrl} />
          ))}
        </BooksContainer>
      </BooksScrollable>
      <Footer />
    </Container>)
}

export default Home