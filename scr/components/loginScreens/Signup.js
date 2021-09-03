import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import AppPreLoader from '../appScreens/AppPreLoader';

const Signup = ({ navigation }) => {

  // const [checked, setChecked] = React.useState('male');
  const [Name, SetName] = useState();
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();
  const [Password2, SetPassword2] = useState();
  const [wrongAlert, setWrongAlert] = useState();
  const [loader, setLoader] = useState(false)


  const [name, setName] = useState({
      lable: {
          color: 'gray',
          fontSize: 14
      },
      container: {
          borderBottomColor: 'gray',
          borderBottomWidth: 1
      }
  })
  // const [age, setAge] = useState({
  //     lable: {
  //         color: 'gray',
  //         fontSize: 14
  //     },
  //     container: {
  //         borderBottomColor: 'gray',
  //         borderBottomWidth: 1
  //     }
  // })
  // const [Height, setHeight] = useState({
  //     lable: {
  //         color: 'gray',
  //         fontSize: 14
  //     },
  //     container: {
  //         borderBottomColor: 'gray',
  //         borderBottomWidth: 1
  //     }
  // })
  // const [weight, setWeight] = useState({
  //     lable: {
  //         color: 'gray',
  //         fontSize: 14
  //     },
  //     container: {
  //         borderBottomColor: 'gray',
  //         borderBottomWidth: 1
  //     }
  // })
  const [email, setEmail] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    },
  })
  const [password, setPassword] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    },
  })

  const [confirmPassword, setConfirmPassword] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    },
  })



  const signup = () => {
    setLoader(true)
    if (Password2 != Password) {
      setLoader(false)
      setConfirmPassword({
        lable: { color: 'red', fontSize: 14 },
        container: { borderBottomColor: 'red', borderBottomWidth: 1 }
      })
      setWrongAlert("Confirm Password does not match with Password")
    }else if(Name==""||Email==""||Password==""||Password2==""){
      alert("Please fill the all fields")
    } else {
      auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then((res) => {
          setLoader(false)
          res.user.updateProfile({
            displayName: Name,
          })
          setWrongAlert('User account created & signed in!')
          
        })
        .catch(error => {
          setLoader(false)
          if (error.code === 'auth/email-already-in-use') {
            setWrongAlert('That email address is already in use!')
          }

          if (error.code === 'auth/invalid-email') {
            setWrongAlert('That email address is invalid!')
          }

          // console.error(error);
        });
    }

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
            inputContainerStyle={{ height: 40, ...name.container }}
            placeholder='Input Name'
            label="Name"
            value={Name}
            onChangeText={(t) => SetName(t)}
            labelStyle={name.lable}
            onFocus={() => setName({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setName({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='account-plus'
                size={20}
                color='#007fcb'
              />
            }
          />

          {/* <Input
                        inputStyle={{ fontSize: 13 }}
                        inputContainerStyle={{ height: 40, ...age.container }}
                        placeholder='Input Your Age'
                        label="Age"
                        labelStyle={age.lable}
                        onFocus={() => setAge({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
                        onBlur={() => setAge({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
                        containerStyle={styles.inputContainer}
                        rightIcon={
                            <Icons
                                name='calendar-alt'
                                size={24}
                                color='#007fcb'
                            />
                        }
                    /> */}

          {/* <Input
                        inputStyle={{ fontSize: 13 }}
                        inputContainerStyle={{ height: 40, ...Height.container }}
                        placeholder='Your Height (cm)'
                        label="Height"
                        labelStyle={Height.lable}
                        onFocus={() => setHeight({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
                        onBlur={() => setHeight({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
                        containerStyle={styles.inputContainer}
                        rightIcon={
                            <Icon
                                name='human-male-height'
                                size={27}
                                color='#007fcb'
                            />
                        }
                    /> */}

          {/* <Input
                        inputStyle={{ fontSize: 13 }}
                        inputContainerStyle={{ height: 40, ...weight.container }}
                        placeholder='Your Weight (KG)'
                        label="Weight"
                        labelStyle={weight.lable}
                        onFocus={() => setWeight({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
                        onBlur={() => setWeight({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
                        containerStyle={styles.inputContainer}
                        rightIcon={
                            <Icon
                                name='weight-kilogram'
                                size={26}
                                color='#007fcb'
                            />
                        }
                    /> */}

          {/* <Text style={{width:'90%',textAlign:'left', marginLeft: -10, fontWeight:'bold', color:'gray',marginBottom:5}}>Gender</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 40, justifyContent: 'flex-end', width: '93%', borderBottomWidth:1, borderColor:'gray' }}>
                        <View style={{flexDirection: 'row', alignItems:'center',marginRight:30}}>
                            <Text style={{color:'black', fontSize: 13}}>Male</Text>
                            <RadioButton
                                color="#007fcb"
                                value="male"
                                status={checked === 'male' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('male')}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color:'black', fontSize: 13}}>Female</Text>
                            <RadioButton
                                color="#007fcb"
                                value="female"
                                status={checked === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('female')}
                            />
                        </View>
                    </View> */}

          <Input
            inputStyle={{ fontSize: 13 }}
            inputContainerStyle={{ height: 40, ...email.container }}
            placeholder='Input Email'
            value={Email}
            label="Email"
            labelStyle={email.lable}
            onChangeText={(t) => SetEmail(t)}
            onFocus={() => setEmail({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setEmail({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
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
            inputContainerStyle={{ height: 40, ...password.container }}
            placeholder='Input Password'
            label="Password"
            value={Password}
            secureTextEntry
            labelStyle={password.lable}
            onChangeText={(t) => SetPassword(t)}
            onFocus={() => setPassword({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setPassword({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='lock'
                size={24}
                color='#007fcb'
              />
            }
          />

          <Input
            inputStyle={{ fontSize: 13, }}
            inputContainerStyle={{ height: 40, ...confirmPassword.container }}
            placeholder='Confirm Your Password'
            label="Confirm Password"
            value={Password2}
            secureTextEntry
            labelStyle={confirmPassword.lable}
            onChangeText={(t) => SetPassword2(t)}
            onFocus={() => setConfirmPassword({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setConfirmPassword({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={{ ...styles.inputContainer, marginBottom: 10 }}
            rightIcon={
              <Icon
                name='lock-check'
                size={24}
                color='#007fcb'
              />
            }
          />
          <Text style={{ color: 'red', fontSize: 10, marginBottom: 20 }}>{wrongAlert}</Text>

        </View>




        <TouchableOpacity
          onPress={() => signup()}
          style={styles.btn}>
          <Text style={{ color: "#fff" }}> Sign up </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '80%', margin: 30 }}>
          <Text style={{ color: 'rgb(60, 60, 60)' }}>If you're already a user then </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.btnBelow}> Sign in </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};




const styles = StyleSheet.create({

  main: {
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%',
    alignItems: 'center'
  },
  lable: {
    color: 'red'
  },
  inputContainer: {
    // backgroundColor: 'rgb(230, 230, 230)',
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
    color: '#007fcb',
    fontSize: 13,
    textDecorationLine: 'underline',
  }
});

export default Signup;
