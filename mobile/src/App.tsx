import 'react-native-gesture-handler';
import React from 'react'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
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