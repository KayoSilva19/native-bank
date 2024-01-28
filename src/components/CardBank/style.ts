import styled from "styled-components/native";

export type TypeStyleProps = number

type Props = {
  type: TypeStyleProps
}


export const ContentBalanceBank = styled.TouchableOpacity`
  margin-bottom: 16px;  
  background-color: ${({theme}) => theme.COLORS.white};
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.gray_light};
  border-radius: 4px;
  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const ContentDescriptionTextBank = styled.View`

`
export const TitleBalanceBank = styled.Text`
  color: ${({theme}) => theme.COLORS.gray_dark};
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  
`
export const TextBalance = styled.Text`
  color: ${({theme}) => theme.COLORS.gray_regular};
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`

export const TextBalanceCurrency = styled.Text<Props>`
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  
  color: ${({theme, type}) => type === 0 ? theme.COLORS.red_cherry : theme.COLORS.green_emerald};
`

export const ValueHidden = styled.View`
  height: 10px;
  width: 60px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.COLORS.blue_dark};
`