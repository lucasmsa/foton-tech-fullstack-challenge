import React from 'react'
import Search from '../../components/Search'
import { View, Text } from 'react-native'
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Search />
      <Text>
        OIERES 🍶
      </Text>
    </Container>)
}

export default Home