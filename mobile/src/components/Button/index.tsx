import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps {
  loadMore: boolean;
  pressed: () => void,
  text: string
}

const ButtonProfilePicture = ({ pressed, text }: ButtonProps) => {
  return (
    <ButtonContainer onPress={pressed}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}

export default ButtonProfilePicture;