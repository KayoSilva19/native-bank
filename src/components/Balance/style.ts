import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 28px;
  flex-direction: row;
  background-color: ${({theme}) => theme.COLORS.white};
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.COLORS.gray_light};

  justify-content: space-between;
  margin-top: -20px;
`

export const ContentBalanceBank = styled.View`
  gap: 4px;
` 

export const TitleBalance = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.gray_dark};

`
export const TextBalance = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`