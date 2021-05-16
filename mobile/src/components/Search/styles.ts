import styled from 'styled-components/native'
import MagnifyingGlassIcon from '../../assets/icons/magnifyingGlass.svg'

export const Container = styled.View`
  display: flex;
  width: 336px;
  height: 48px;
  align-items: center;
  flex-direction: row;
  background: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
`

export const MagnifyingGlass = styled(MagnifyingGlassIcon)`
  margin-left: 15px;
  margin-right: 15px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#54565A"
})`
  color: black;
  font-family: SF Pro Text;
  font-size: 16px;
  line-height: 18px;
`