import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, TextInput, StyleSheet, Image } from 'react-native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons'
import userImg from '../../../images/user_icon.png'
import { createStackNavigator } from '@react-navigation/stack';
import Message from './Messages';

import { YellowBox } from 'react-native';
// ignoring warning
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

class UserList extends React.Component {
  state = {
    user: {
      name: this.props.route.params.user.displayName,
      email: this.props.route.params.user.email,
      profilePic: this.props.route.params.user.photoURL,
      uid: this.props.route.params.user.uid
    },
    allUsers:''
  }

  componentDidMount(){
    this.getAllUsers()
  }


  getAllUsers = () => {
    let userList = []
    database().ref('/').child('users').on('child_added', (d) => {
      userList.push(d.val())
      this.setState({
        allUsers: userList
      })
    })
  }


  render() {
    // console.log(this.props.route.params.user)
    return (
      <View style={styles.container}>
        {/* ======= header ========= */}
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={25}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />

          <Image style={styles.usrImg} source={userImg} />

          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            style={styles.headerTxt}>{this.state.user.name}</Text>
        </View>


        {
          this.state.allUsers != "" ?
          this.state.allUsers.map((val, key) => {
              return val.uid != this.state.user.uid? (
                <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate('Message',{'chatUser':val, 'crrUser':this.state.user})}
                  key={key} 
                  style={styles.userCard}>
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                  <Image style={styles.usrImg} source={userImg} />
                  <Text style={{ marginLeft: 20, color: '#404040', }}>
                    {val.name}
                  </Text>
                  </View>
                  <Icon name="chevron-forward-circle" size={25} color="#469433" />
                </TouchableOpacity>
              ):null
            })
            :
            null
        }

      </View>
    )
  }
}



const Stack = createStackNavigator();
function Chats(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} initialParams={{'user': props.route.params.user}} options={{headerShown:false}}/>
        <Stack.Screen name="Message" component={Message} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default Chats;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007fcb',
    height: 60,
    paddingLeft: 15,
    elevation: 8,
    marginBottom:10
  },
  usrImg: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 80,
    marginLeft: 10,
    tintColor: 'gray'
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    width: Dimensions.get('window').width,
    elevation: 3,
    marginVertical: 5
  },
  headerTxt: {
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
    fontSize: 17,
    marginLeft: 20
  },

})

// #469433
// #007fcb

