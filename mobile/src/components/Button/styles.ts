import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ButtonContainer = styled(RectButton)`
  width: 160px;
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