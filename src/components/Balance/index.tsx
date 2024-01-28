import { formatValue } from 'src/utils/fomatedValueInMoney'
import { Container, ContentBalanceBank, TextBalance, TitleBalance,  } from './style'

type Props = {
  balance: string,
  spending: string
}

export default function Balance({balance, spending}: Props) {

  return (
    <Container>
      <ContentBalanceBank>
        <TitleBalance>Saldo</TitleBalance>
        <TextBalance>{formatValue(balance)}</TextBalance>
      </ContentBalanceBank>
      <ContentBalanceBank>
        <TitleBalance>Gastos</TitleBalance>
        <TextBalance>{formatValue(spending)}</TextBalance>
      </ContentBalanceBank>
    </Container>
  )
}