import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import { BooksContainer, BooksScrollable, Container, NameText, NoBooksFoundText, WelcomeContainer, WelcomeText } from './styles'
import Book, { BookProps } from '../../components/Book'
import Footer from '../../components/Footer'
import api from '../../services/api'
import Button from '../../components/Button'
import { SafeAreaView, StatusBar } from 'react-native'
import { useCallback } from 'react'

const Home: React.FC = () => {
  const [books, setBooks] = useState<Omit<BookProps, 'bookDetails'>[] | []>([])
  const [bookQuery, setBookQuery] = useState<string>('')
  const [loadMore, setLoadMore] = useState<boolean>(false)

  const loadBooks = useCallback(async () => {
    const response = bookQuery.length
      ? await api.get(`/search/${bookQuery}`)
      : await api.get('/')

    setBooks(response.data)
  }, [books])

  useEffect(() => {
    loadBooks()
  }, [loadBooks])


  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fefaf6' />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fefaf6' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <Search
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
              {books.map(({ id, author, name, imageUrl }: BookProps, index: number) => {
                if ((loadMore) || (bookQuery && index < 3) || (!bookQuery)) {
                  return (
                    <Book
                      key={id}
                      id={id}
                      author={author}
                      name={name}
                      imageUrl={imageUrl}
                    />)
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
          <Footer selected={'Home'} />
        </Container>
      </SafeAreaView>
    </>
  )
}

export default Home