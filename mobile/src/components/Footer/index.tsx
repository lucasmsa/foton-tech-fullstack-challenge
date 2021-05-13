import React from 'react'
import { Container, OptionContainer, OptionContainerPlusText, OptionContainerText, PlusSign } from './styles'
import HomeIcon from '../../assets/icons/home.svg'
import ProfileIcon from '../../assets/icons/profile.svg'

const Footer: React.FC = () => {
  return (
    <Container>
      <OptionContainer>
        <HomeIcon />
        <OptionContainerText>Home</OptionContainerText>
      </OptionContainer>
      <OptionContainer>
        <PlusSign>+</PlusSign>
        <OptionContainerPlusText>Add Book</OptionContainerPlusText>
      </OptionContainer>
      <OptionContainer>
        <ProfileIcon />
        <OptionContainerText>Profile</OptionContainerText>
      </OptionContainer>
    </Container>)
}

export default Footer