import React, { useEffect, useRef, useState } from 'react'
import { AddBookText, Container, FieldNameText, FieldOptionContainer, FieldsContainer, Optional, WelcomeContainer, FieldInput, ContainerScrollView } from './styles'
import Footer from '../../components/Footer'
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, TextInput } from 'react-native'
import { useForm } from 'react-hook-form'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../components/Button'

const CreateBook: React.FC = () => {
  const { control, handleSubmit } = useForm()
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fefaf6' />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fefaf6' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <ContainerScrollView>
            <KeyboardAvoidingView
              behavior={"position"}
              keyboardVerticalOffset={54}
              style={{ flex: 1 }}
            >
              <WelcomeContainer>
                <AddBookText>Add a new book</AddBookText>
              </WelcomeContainer>
              <FieldsContainer>
                <FieldOptionContainer style={{ marginTop: 0 }}>
                  <FieldNameText>Name</FieldNameText>
                  <FieldInput
                    name={'name'}
                    control={control}
                  />
                </FieldOptionContainer>
                <FieldOptionContainer>
                  <FieldNameText>Author</FieldNameText>
                  <FieldInput
                    name={'author'}
                    control={control}
                  />
                </FieldOptionContainer>
                <FieldOptionContainer>
                  <FieldNameText>Book cover image link ( <Optional>optional</Optional> )</FieldNameText>
                  <FieldInput
                    name={'imageUrl'}
                    control={control}
                  />
                </FieldOptionContainer>
                <FieldOptionContainer>
                  <FieldNameText>Description</FieldNameText>
                  <FieldInput
                    name={'imageUrl'}
                    description
                    control={control}
                  />
                </FieldOptionContainer>
              </FieldsContainer>
            </KeyboardAvoidingView>
            <Button
              loadMore={false}
              pressed={() => { }}
              text={'Add new book'}
            />
          </ContainerScrollView>
        </Container>
        <Footer selected={'CreateBook'} />
      </SafeAreaView>
    </>
  )
}

export default CreateBook
