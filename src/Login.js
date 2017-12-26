import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native'

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        
        <View style={styles.bgContainer}>
          <Image source={require('./assets/bgbasketball.jpg')} style={styles.bgImage} />
        </View>

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
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 40,
    color: 'white'
  },
  bgContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
})
