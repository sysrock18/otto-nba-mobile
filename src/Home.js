import React from 'react'
import {
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native'
import { TabNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from './Login'

const Scoreboards = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Scoreboards</Text>
  </View>
)

const Standings = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Scoreboards</Text>
  </View>
)

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

const Drawer = DrawerNavigator({
  Home: {
    screen: Tabs
  }
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Otto NBA',
    headerStyle: {
      backgroundColor: '#0d47a1',
      elevation: 0,
      shadowOpacity: 0
    },
    headerTitleStyle: {
      fontWeight: '500',
      color: 'white'
    },
    headerLeft: (
      <TouchableOpacity>
        <Icon name="ios-basketball" size={30} color="#FA8320" style={{marginLeft: 20}} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Drawer />
    )
  }
}
