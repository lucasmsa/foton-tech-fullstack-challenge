import React from 'react'
import { Container, OptionContainer, OptionContainerPlusText, OptionContainerText, PlusSign } from './styles'
import HomeIcon from '../../assets/icons/not-selected-home.svg'
import SelectedHomeIcon from '../../assets/icons/home.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

interface FooterProps {
  selected: 'Home' | 'CreateBook'
}

const Footer = ({ selected }: FooterProps) => {
  const navigation = useNavigation()

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Home')}>
        <OptionContainer>
          {selected === 'Home' ? <SelectedHomeIcon /> : <HomeIcon />}
          <OptionContainerText style={selected === 'Home' && { color: "#313131" }}>Home</OptionContainerText>
        </OptionContainer>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('CreateBook')}>
        <OptionContainer>
          <PlusSign style={selected === 'CreateBook' && { color: "#313131" }}>+</PlusSign>
          <OptionContainerPlusText style={selected === 'CreateBook' && { color: "#313131" }}>Add Book</OptionContainerPlusText>
        </OptionContainer>
      </TouchableOpacity>
      <OptionContainer>
        <ProfileIcon />
        <OptionContainerText>Profile</OptionContainerText>
      </OptionContainer>
    </Container>)
}

export default Footer