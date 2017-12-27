import React from 'react'
import {
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from './Login'
import Scoreboards from './Scoreboards'
import Standings from './Standings'

const Tabs = TabNavigator(
  {
    Scoreboards: {
      screen: Scoreboards,
    },
    Standings: {
      screen: Standings,
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#0d47a1'
      },
      indicatorStyle: {
        backgroundColor: '#d50000'
      }
    }
  }
)

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Otto NBA',
    headerStyle: {
      backgroundColor: '#0d47a1',
      elevation: 0,
      shadowOpacity: 0
    },
    headerTitleStyle: {
      fontWeight: '200',
      color: 'white'
    },
    headerTintColor: 'white',
    headerRight: (
      <TouchableOpacity>
        <Icon name="ios-basketball-outline" size={30} color="white" style={{marginRight: 20}} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Tabs />
    )
  }
}
