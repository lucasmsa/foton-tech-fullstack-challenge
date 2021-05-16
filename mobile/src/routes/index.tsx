import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Details from '../pages/Details'
import CreateBook from '../pages/CreateBook'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fefaf6' }
    }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='CreateBook' component={CreateBook} />
    </Stack.Navigator>
  )
}

export default Routes