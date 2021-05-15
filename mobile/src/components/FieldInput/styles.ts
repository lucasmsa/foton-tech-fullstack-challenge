import styled from 'styled-components/native'

interface DescriptionProp {
  description: boolean;
}

export const Container = styled.View<DescriptionProp>`
  display: flex;
  width: 336px;
  height: ${props => (props.description ? 120 : 48)}px;
  align-items: center;
  flex-direction: row;
  justify-content: ${props => (props.description ? 'center' : 'center')};
  background: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-radius: 10px;
`

export const Input = styled.TextInput<DescriptionProp>`
  color: black;
  width: 310px;
  height: ${props => (props.description ? 100 : 20)}px;
  display: flex;
  justify-content: flex-end;
`