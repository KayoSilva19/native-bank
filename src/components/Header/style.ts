import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  padding: 42px 24px ;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.COLORS.blue_dark};
`;

export const TextNameUser = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.white };
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: bold;
  `}
`;

export const ButtonUser = styled.TouchableOpacity`
  min-height: 56px;
  padding: 12px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.COLORS.white};
  border-color: ${({theme}) => theme.COLORS.gray_light};
  justify-content: center;
  align-items: center;
`

export const IconUser = styled(Ionicons).attrs(({theme}) => {
  return {
    size: 32,
    color: theme.COLORS.gray_dark,
  }
})``