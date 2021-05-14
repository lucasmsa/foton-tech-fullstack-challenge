import React from 'react'
import { Container, MagnifyingGlass, Input } from './styles'

interface SearchProps {
  search: boolean;
  placeholder: string;
  change: (event: string) => void;
  value: string;
}

const Search = ({ search, placeholder, change, value }: SearchProps) => {
  return (
    <Container>
      {search && <MagnifyingGlass />}
      <Input
        placeholder={placeholder}
        onChangeText={change}
        value={value}
      />
    </Container>)
}

export default Search