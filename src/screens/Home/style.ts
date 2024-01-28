
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled(SafeAreaView)`
  flex:1;
  background-color: ${({theme}) => theme.COLORS.white};
`

export const ContentBalanceBank = styled.View`
  padding: 16px;
  flex: 1;
`
export const ContentTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonView = styled.TouchableOpacity`

`

export const ScrollViewContent = styled.ScrollView`
  max-height: 140px;
  padding: 16px;

  flex: 1;
  flex-direction: row;
`
export const Icon = styled(Ionicons).attrs({
  size: 24,
})`

`

export const TitleBalanceBank = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.blue_dark};
  margin-bottom: 16px;
`
