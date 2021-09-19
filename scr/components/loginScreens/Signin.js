import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import AppPreLoader from '../appScreens/AppPreLoader';


const Signin = ({ navigation }) => {

  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();
  const [msg, setMsg] = useState();
  const [loader, setLoader] = useState(false)

  const [emailStyle, setEmailStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })
  const [passwordStyle, setPasswordStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })


  const signin = () => {
    setLoader(true)
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(() => {
        console.log('User account signed in!');
        // setWrongAlert('signed in!')
      })
      .catch(error => {
        setLoader(false)
        if (error.code === 'auth/user-not-found') {
          setMsg("There is no user record corresponding to this email")
        }


        if (error.code === 'auth/invalid-email') {
          setMsg('That email address is invalid!')
        }

        if (error.code === 'auth/wrong-password') {
          setMsg('Wrong Password!')
        }
        if (error.code === 'auth/network-request-failed') {
          setMsg('Network error, Please check your connection')
        }
        console.log(error);
      });
  }

  if (loader) {
    return (
      <AppPreLoader />
    )
  }

  return (
    <ScrollView>
      <View style={styles.main}>
        <Image style={styles.logo} source={require('../../images/logo/logo_png.png')} />

        <View style={styles.form}>

          <Input
            inputStyle={{ fontSize: 13 }}
            inputContainerStyle={{ height: 40, ...emailStyle.container }}
            placeholder='Input Email'
            label="Email"
            labelStyle={emailStyle.lable}
            onChangeText={(t) => SetEmail(t)}
            onFocus={() => setEmailStyle({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setEmailStyle({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='email'
                size={24}
                color='#007fcb'
              />
            }
          />


          <Input
            inputStyle={{ fontSize: 13, }}
            inputContainerStyle={{ height: 40, ...passwordStyle.container }}
            placeholder='Input Password'
            label="Password"
            secureTextEntry
            labelStyle={passwordStyle.lable}
            onChangeText={(t) => SetPassword(t)}
            onFocus={() => setPasswordStyle({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setPasswordStyle({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={{ ...styles.inputContainer, marginBottom: 20 }}
            rightIcon={
              <Icon
                name='lock'
                size={24}
                color='#007fcb'
              />
            }
          />
          <Text style={{ color: 'red', fontSize: 10, marginBottom: 20, marginLeft: 10 }}>{msg}</Text>
        </View>

        <TouchableOpacity
          onPress={() => signin()}
          style={styles.btn}>
          <Text style={{ color: "#fff" }}> Sign in </Text>
        </TouchableOpacity>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', margin: 30 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgatPassword')}>
            <Text style={styles.btnBelow}> Forgat Password </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.btnBelow}> Sign up </Text>
          </TouchableOpacity>
        </View>




      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  main: {
    alignItems: "center",

  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%'
  },

  inputContainer: {
    height: 60,
    marginBottom: 40,
  },
  btn: {
    color: '#fff',
    backgroundColor: '#469433',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 20,
    elevation: 5
  },
  btnBelow: {
    color: 'rgb(60, 60, 60)',
    fontSize: 13,
    textDecorationLine: 'underline',
  }
});

export default Signin;
