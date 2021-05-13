import React from 'react'
import { View, Text } from 'react-native'
import MagnifyingGlass from '../../assets/icons/magnifyingGlass.svg'
import { Container } from './styles'

const Search: React.FC = () => {
  return (
    <Container>
      <MagnifyingGlass />
      <Text>
        Olarsons
      </Text>
    </Container>)
}

export default Search