import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#007fcb" />

      <Image style={styles.logo} source={require('../../images/logo/logo_png_name.png')} />

      <View style={styles.login}>
        <TouchableOpacity style={styles.loginText} onPress={() => navigation.navigate('Signin')}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="user-lock" size={15} color="#007fcb" />
            <Text style={{ color: '#000', marginLeft: 10, fontSize: 13 }}>Sign in</Text>
          </View>
          <Icon name="arrow-right" size={20} color="#007fcb" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginText} onPress={() => navigation.navigate('Signup')}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="user-plus" size={15} color="#007fcb" />
            <Text style={{ color: '#000', marginLeft: 10, fontSize: 13 }}>Sign up</Text>
          </View>
          <Icon name="arrow-right" size={20} color="#007fcb" />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: '50%',
    height: '30%',
    resizeMode: 'contain'

  },

  login: {
    width: '80%',
    height: 250,
    borderRadius: 15,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    flexDirection: 'row',
    backgroundColor: 'rgb(230, 230, 230)',
    padding: 17,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center'
  }
});

export default LoginScreen;