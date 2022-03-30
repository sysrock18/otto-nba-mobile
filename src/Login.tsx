import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Login({ navigation }: any) {
  const { navigate } = navigation
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      
      <View style={styles.bgContainer}>
        <Image source={require('./assets/bgbasketball.jpg')} style={styles.bgImage} />
      </View>

      <Text style={styles.title}>
        Otto NBA
      </Text>

      <TouchableOpacity
        style={styles.buttonContinue}
        onPress={() => navigate('Home')}>
        <Text>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tapProfile} onPress={() => setModalVisible(true)}>
        <Text style={styles.textProfile}>Developer Info</Text>
      </TouchableOpacity>

      <Modal
        // style={styles.modalProfile}
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name='ios-close'
              size={30}
              color='#000'
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            />
            <Text style={styles.titleProfile}>Information</Text>
            <Icon name="ios-basketball" color="#FA8320" size={80} />
            <Text>Developed By</Text>
            <Text style={{fontWeight: '500', marginBottom: 15}}>Simon Gonzalez</Text>
            <Icon name="logo-github" color="black" size={20} />
            <Text>sysrock18</Text>
            <Icon name="md-globe" color="green" size={20} />
            <Text>simongonzalezblog.wordpress.com</Text>
          </View>
        </View>
      </Modal>

    </View>
  )
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative'
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'transparent'
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
    width: undefined,
    height: undefined,
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
