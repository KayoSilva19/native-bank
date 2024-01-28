import { TouchableOpacityProps } from 'react-native'
import { ContentBalanceBank, ContentDescriptionTextBank, TextBalance, TextBalanceCurrency, TitleBalanceBank, TypeStyleProps, ValueHidden } from './style'
import { formatValue } from 'src/utils/fomatedValueInMoney'
import { useState } from 'react'


type Props = TouchableOpacityProps & {
  descriptionTextBank: string,
  value: number,
  date: string,
  showValue: boolean,
  type?: TypeStyleProps,
}

export function CardBank({ descriptionTextBank, value, date, showValue, type = 0, ...rest }: Props) {
  return (
      <ContentBalanceBank {...rest}>
        <ContentDescriptionTextBank>
          <TextBalance>{date}</TextBalance>
          <TitleBalanceBank>{descriptionTextBank}</TitleBalanceBank>
        </ContentDescriptionTextBank>
        <TextBalanceCurrency type={type}>
          {
            showValue ? `R$ ${type === 0 ? `-${formatValue(value)}` : formatValue(value)}`
            : <ValueHidden/>
          }
          
        </TextBalanceCurrency>
      </ContentBalanceBank>
  )
}