import 'react-native-gesture-handler';
import React from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle='dark-content' backgroundColor='#fefaf6' />
    <SafeAreaView style={{ flex: 0, backgroundColor: '#fefaf6' }} />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Routes />
    </SafeAreaView>
  </NavigationContainer>
)

export default App;