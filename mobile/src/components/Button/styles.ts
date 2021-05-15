import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface ButtonProps {
  loadMore: boolean;
}

export const ButtonContainer = styled(RectButton) <ButtonProps>`
  width: ${props => (props.loadMore ? 160 : 336)}px;
  height: 50px;
  background: #fe6a78;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 24px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`