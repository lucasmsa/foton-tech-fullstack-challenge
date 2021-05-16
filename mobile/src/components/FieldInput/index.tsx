import React from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'
import { ScrollView } from 'react-native'
import { Container, Input } from './styles'

interface FieldInputProps {
  name: string;
  control: Control<FieldValues>;
}

const FieldInput = ({ name, control }: FieldInputProps) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  })
  return (
    <Container
      description={(name === 'description')}
    >
      <Input
        multiline={name === 'description' && true}
        keyboardType={name === 'imageUrl' ? 'url' : 'default'}
        numberOfLines={name === 'description' ? 4 : 1}
        value={field.value}
        onChangeText={field.onChange}
        description={name === 'description'}
      />
    </Container>)
}

export default FieldInput