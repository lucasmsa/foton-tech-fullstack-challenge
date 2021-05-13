import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fefaf6' }
    }}>
      <Stack.Screen name='Home' component={Home} />
      {/* <Stack.Screen name='SignUp' component={SignUp} /> */}
      {/* <Stack.Screen name='Home' component={SignIn} /> */}
    </Stack.Navigator>
  )
}

export default Routes