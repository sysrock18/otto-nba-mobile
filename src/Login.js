import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

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
          style={styles.buttonContinue}
          onPress={() => navigate('Home')}>
          Continue
        </Button>

        <TouchableOpacity style={styles.tapProfile} onPress={() => this.refs.mymodal.open()}>
          <Text style={styles.textProfile}>Developer Info</Text>
        </TouchableOpacity>

        <Modal style={styles.modalProfile} ref={"mymodal"}>
          <Text style={styles.titleProfile}>Information</Text>
          <Icon name="ios-basketball" color="#FA8320" size={80} />
          <Text>Developed By</Text>
          <Text style={{fontWeight: '500', marginBottom: 15}}>Simon Gonzalez</Text>
          <Icon name="logo-github" color="black" size={20} />
          <Text>sysrock18</Text>
          <Icon name="logo-twitter" color="#00aced" size={20} />
          <Text>@rockersgz</Text>
          <Icon name="md-globe" color="green" size={20} />
          <Text>simongonzalezblog.wordpress.com</Text>
        </Modal>

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
    marginTop: 120,
    color: 'white'
  },
  tapProfile: {
    marginTop: 40
  },
  textProfile: {
    color: 'white',
    fontSize: 18
  },
  modalProfile: {
    width: 300,
    height: 320,
    padding: 15,
    alignItems: 'center'
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
  buttonContinue: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#FF5252'
  },
  titleProfile: {
    fontSize: 24
  }
})
