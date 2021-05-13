import React from 'react'
import { Container, MagnifyingGlass, Input } from './styles'

const Search: React.FC = () => {
  return (
    <Container>
      <MagnifyingGlass />
      <Input placeholder='Search book' />
    </Container>)
}

export default Search