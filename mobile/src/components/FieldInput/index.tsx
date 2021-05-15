import React from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'
import { ScrollView } from 'react-native'
import { Container, Input } from './styles'

interface FieldInputProps {
  name: string;
  description: boolean;
  control: Control<FieldValues>;
}

const FieldInput = ({ name, description, control }: FieldInputProps) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  })
  return (
    <Container
      description={description}
    >
      <Input
        multiline={description && true}
        numberOfLines={description ? 4 : 1}
        value={field.value}
        onChangeText={field.onChange}
        description={description}
      />
    </Container>)
}

export default FieldInput