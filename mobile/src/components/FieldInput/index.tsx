import React from 'react'
import { TextInput } from 'react-native'
import { Container, Input } from './styles'

interface FieldInputProps {
  description: boolean
}

const FieldInput = ({ description }: FieldInputProps) => {
  return (
    <Container style={description && { height: 180 }}>
      <TextInput style={description && { height: 180 }} />
    </Container>)
}

export default FieldInput