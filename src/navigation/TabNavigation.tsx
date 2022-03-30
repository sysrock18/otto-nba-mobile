import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Scoreboards from '../Scoreboards';
import Standings from '../Standings';

const Tab = createMaterialTopTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Scoreboards" component={Scoreboards} />
      <Tab.Screen name="Standings" component={Standings} />
    </Tab.Navigator>
  )
}
