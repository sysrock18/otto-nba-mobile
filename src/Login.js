import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Otto NBA
        </Text>
        <Button
          onPress={() => navigate('Home')}
          title="Continue"
          color="#FF5252"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
})
