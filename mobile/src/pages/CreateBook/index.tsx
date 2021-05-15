import React, { useEffect, useRef, useState } from 'react'
import { AddBookText, Container, FieldNameText, FieldOptionContainer, FieldsContainer, Optional, WelcomeContainer, FieldInput } from './styles'
import Footer from '../../components/Footer'
import { SafeAreaView, StatusBar, TextInput } from 'react-native'

const CreateBook: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fefaf6' />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fefaf6' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <WelcomeContainer>
            <AddBookText>Add a new book</AddBookText>
          </WelcomeContainer>
          <FieldsContainer>
            <FieldOptionContainer style={{ marginTop: 0 }}>
              <FieldNameText>Name</FieldNameText>
              <FieldInput />
            </FieldOptionContainer>
            <FieldOptionContainer>
              <FieldNameText>Author</FieldNameText>
              <FieldInput />
            </FieldOptionContainer>
            <FieldOptionContainer>
              <FieldNameText>Book cover image link ( <Optional>optional</Optional> )</FieldNameText>
              <FieldInput />
            </FieldOptionContainer>
            <FieldOptionContainer>
              <FieldNameText>Description</FieldNameText>
              <FieldInput
                description
              />
            </FieldOptionContainer>
          </FieldsContainer>
          <Footer selected={'CreateBook'} />
        </Container>
      </SafeAreaView>
    </>
  )
}

export default CreateBook
