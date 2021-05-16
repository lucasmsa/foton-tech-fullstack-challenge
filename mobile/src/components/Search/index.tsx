import React from 'react'
import { Container, MagnifyingGlass, Input } from './styles'

interface SearchProps {
  placeholder: string;
  change: (event: string) => void;
  value: string;
}

const Search = ({ placeholder, change, value }: SearchProps) => {
  return (
    <Container>
      <MagnifyingGlass />
      <Input
        placeholder={placeholder}
        onChangeText={change}
        value={value}
      />
    </Container>)
}

export default Search