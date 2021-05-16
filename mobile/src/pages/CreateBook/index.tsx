import React, { useCallback } from 'react'
import { AddBookText, Container, FieldNameText, FieldOptionContainer, FieldsContainer, Optional, WelcomeContainer, FieldInput, ContainerScrollView } from './styles'
import Footer from '../../components/Footer'
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import api from '../../services/api'
import Toast from 'react-native-toast-message';
import { capitalizeWords } from '../../utils/capitalizeWord'

interface IError {
  location: string;
  msg: string;
  param: string;
  value: string;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CreateBook: React.FC = () => {
  const { control, handleSubmit } = useForm()

  const onSubmit = useCallback(async ({ author, description, imageUrl, name }) => {
    try {
      await api.post('/', {
        author,
        description,
        imageUrl,
        name
      })

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Book inserted successfully! ✔',
        visibilityTime: 2000,
        bottomOffset: 100,
      })
    } catch (error) {
      if (error.response.data === 'Book with this name already exists!') {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Book with this name already exists!',
          visibilityTime: 2500,
          bottomOffset: 100,
        })
      } else {
        const errorData = error.response.data.errors as IError[]
        for (let { param, msg } of errorData) {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: capitalizeWords(param),
            text2: msg,
            visibilityTime: 2500,
            bottomOffset: 100,
          })
          await delay(2500)
        }
      }
    }
  }, [])

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
                    name={'description'}
                    control={control}
                  />
                </FieldOptionContainer>
              </FieldsContainer>
            </KeyboardAvoidingView>
            <Button
              loadMore={false}
              pressed={handleSubmit(onSubmit)}
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
