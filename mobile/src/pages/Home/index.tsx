import React, { useEffect, useRef, useState } from 'react'
import Search from '../../components/Search'
import { BooksContainer, BooksScrollable, Container, LoadMoreButton, NameText, NoBooksFoundText, WelcomeContainer, WelcomeText } from './styles'
import Book, { BookProps } from '../../components/Book'
import Footer from '../../components/Footer'
import api from '../../services/api'
import Button from '../../components/Button'

interface Book extends BookProps {
  id: string;
  description: string;
}

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[] | []>([])
  const [bookQuery, setBookQuery] = useState<string>('')
  const [loadMore, setLoadMore] = useState<boolean>(false)

  useEffect(() => {
    async function loadBooks(): Promise<void> {
      const response = bookQuery.length
        ? await api.get(`/search/${bookQuery}`)
        : await api.get('/')

      setBooks(response.data)
    }

    loadBooks();
  }, [bookQuery])

  return (
    <Container>
      <Search
        search
        placeholder="Search books"
        change={(bookSearch: string) => {
          setLoadMore(false)
          setBookQuery(bookSearch)
        }}
        value={bookQuery}
      />
      <WelcomeContainer>
        <WelcomeText>
          Hi, <NameText>Mucas Loreira</NameText> 👋
        </WelcomeText>
      </WelcomeContainer>
      <BooksScrollable>
        {!books.length && <NoBooksFoundText>No book was found</NoBooksFoundText>}
        <BooksContainer>
          {books.map(({ id, author, name, imageUrl }: Book, index: number) => {
            if ((loadMore) || (bookQuery && index < 3) || (!bookQuery)) {
              return (<Book key={id} author={author} name={name} imageUrl={imageUrl} />)
            }
          })
          }
        </BooksContainer>
        {(!loadMore && books.length > 3 && !!(bookQuery)) && (
          <Button
            text="Load more ✚"
            pressed={() => { setLoadMore(true) }}
            loadMore
          />
        )}
      </BooksScrollable>
      <Footer />
    </Container>)
}

export default Home