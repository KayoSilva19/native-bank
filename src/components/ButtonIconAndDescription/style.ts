import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`
export const ContainerButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.blue_dark};
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 8px;
`
export const IconButton = styled(Ionicons).attrs({
  size: 32,
  color: 'white'
})`
 
`
export const DescriptionButton = styled.Text`
 
`
