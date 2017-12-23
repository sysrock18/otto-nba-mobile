import React from 'react'
import { StackNavigator } from 'react-navigation';

import Login from './src/Login'
import Home from './src/Home'

export const Routes = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home }
})

export default class App extends React.Component {
  render() {
    return <Routes />
  }
}
