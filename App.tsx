import { Home } from '@screens/Home';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Default from 'src/theme/Default';

export default function App() {
  return (
    <ThemeProvider theme={Default}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='#03396C' 
        translucent
      />
      <Home/>
    </ThemeProvider>
  );
}
