import 'react-native-gesture-handler';
import React from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes';
import Toast from 'react-native-toast-message';

const App: React.FC = () => (
  <NavigationContainer>
    <Routes />
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </NavigationContainer>
)

export default App;