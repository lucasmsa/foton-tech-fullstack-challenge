import React from 'react'
import Search from '../../components/Search'
import { Container, NameText, WelcomeContainer, WelcomeText } from './styles'
import Book from '../../components/Book'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Search />
      <WelcomeContainer>
        <WelcomeText>
          Hi, <NameText>Mucas Loreira</NameText> 👋
        </WelcomeText>
      </WelcomeContainer>
      <Book author={"J. K. Rowling"} name={"Harry Potter"} imageUrl={null} />
      <Footer />
    </Container>)
}

export default Home