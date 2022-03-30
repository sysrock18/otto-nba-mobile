import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Home'
import Login from '../Login'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'OTTO NBA' }} />
    </Stack.Navigator>
  )
}
