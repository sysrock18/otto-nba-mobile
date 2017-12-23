import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { TabNavigator } from 'react-navigation';

const Scoreboards = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Scoreboards</Text>
  </View>
);

const Standings = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Scoreboards</Text>
  </View>
);

const Tabs = TabNavigator({
  Scoreboards: {
    screen: Scoreboards,
  },
  Standings: {
    screen: Standings,
  },
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Otto NBA'
  }

  render() {
    return (
      <Tabs />
    )
  }
}
