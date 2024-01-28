import { Header } from '@components/Header';
import { ButtonView, Container, ContentBalanceBank, TitleBalanceBank, Icon, ContentTitle, ScrollViewContent } from './style';
import Balance from '@components/Balance';
import { FlatList, ScrollView, Text } from 'react-native';
import { CardBank } from '@components/CardBank';
import { useState } from 'react';
import { ButtonIconAndDescription } from '@components/ButtonIconAndDescription';

export function Home() {

  const listAccounts = [
    {
      id: 1,
      label: 'Boleto conta de luz',
      value: 2500.00,
      date: '17/08/2024',
      type: 0, // Despesas
    },
    {
      id: 2,
      label: 'Pix Cliente X',
      value: 4300.33,
      date: '11/05/2024',
      type: 1, // Receita
    },
    {
      id: 3,
      label: 'Salário',
      value: 9470.55,
      date: '07/03/2024',
      type: 1, // Receita
    },
    {
      id: 4,
      label: 'Salário',
      value: 9470.55,
      date: '07/03/2024',
      type: 1, // Receita
    },
    {
      id: 5,
      label: 'Salário',
      value: 9470.55,
      date: '07/03/2024',
      type: 0, // Receita
    },
    {
      id: 6,
      label: 'Salário',
      value: 9470.55,
      date: '07/03/2024',
      type: 1, // Receita
    },
    {
      id: 7,
      label: 'Salário',
      value: 9470.55,
      date: '07/03/2024',
      type: 1, // Receita
    }

  ]
  const [showValue, setShowValue] = useState(false)

  return (
    <Container>
      <Header nameUser='Kayo Henrique'/>
      <Balance balance='180000.00' spending='2200.00'/>

      <ScrollViewContent horizontal={true} showsHorizontalScrollIndicator={false}>
        <ButtonIconAndDescription nameIcon='cash-outline' description='Entradas'/>
        <ButtonIconAndDescription nameIcon='pricetag-outline' description='Compras'/>
        <ButtonIconAndDescription nameIcon='wallet-outline' description='Carteira'/>
        <ButtonIconAndDescription nameIcon='barcode-outline' description='Boletos'/>
        <ButtonIconAndDescription nameIcon='qr-code-outline' description='Pix'/>
      </ScrollViewContent>

      <ContentBalanceBank>
        <ContentTitle>
          <TitleBalanceBank>Últimas movimentações</TitleBalanceBank> 
            <ButtonView onPress={() => setShowValue(!showValue)}>
              {
                showValue ?
                  <Icon 
                    name="eye-outline"
                  />
                :
                  <Icon 
                    name="eye-off-outline"
                  />
              }
             
            </ButtonView>
        </ContentTitle>
        <FlatList
          data={listAccounts}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <CardBank 
              descriptionTextBank = {item.label} 
              value = {item.value} 
              date = {item.date}
              type = {item.type}
              showValue = {showValue}
            />
          )}

          showsVerticalScrollIndicator={false}
        />
      </ContentBalanceBank>
    </Container>
  );
}