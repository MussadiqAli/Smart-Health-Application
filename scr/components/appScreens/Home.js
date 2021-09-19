import * as React from 'react';
import { Dimensions, View, Text, SafeAreaView, StyleSheet, Image, Animated, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Img from '../../images/logo/logo_png_name.png'
import { TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import { transform } from '@babel/core';
import auth from '@react-native-firebase/auth';

// images
import workout from '../../images/workouts.png'
import bmi from '../../images/bmi.png'
import foot from '../../images/footStep.png'
import diet from '../../images/diets.png'
import water from '../../images/water.png'
import chat from '../../images/quotes.png'
import logout from '../../images/logout.png'
import Mental from '../../images/mentalHealth.png'


export default function Main({ navigation }) {


  const Drawer = () => {
    // do actions here...
    // scalling the view
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 500,
      useNativeDriver: true,
    })
      .start()
    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 225,
      duration: 300,
      useNativeDriver: true,
    })
      .start()
    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    })
      .start()
    setShowMenu(!showMenu);
  }

  const [currentTab, setCurrentTab] = useState("Home")
  // To get the current status of manu
  const [showMenu, setShowMenu] = useState(false);


  // Animation properties
  const offsetValue = useRef(new Animated.Value(0)).current;
  // scale initially must be one
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;


  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#007fcb" />
      <View style={{ justifyContent: 'flex-start', }}>
        <View style={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 10,
          width: (Dimensions.get('window').width * 4) / 10
        }}>
          <Image source={Img} style={{ width: '100%', height: 140, resizeMode: 'contain' }} />
        </View>
        <View style={{ flexGrow: 1, marginTop: 30 }}>
          {TabBtns(currentTab, setCurrentTab, "Workouts", workout, navigation, Drawer)}
          {TabBtns(currentTab, setCurrentTab, "Diets", diet, navigation, Drawer)}
          {TabBtns(currentTab, setCurrentTab, "MentalHealth", Mental, navigation, Drawer)}
          {TabBtns(currentTab, setCurrentTab, "Water", water, navigation, Drawer)}
          {TabBtns(currentTab, setCurrentTab, "BMI", bmi, navigation, Drawer)}
          {TabBtns(currentTab, setCurrentTab, "Footsteps Tracking", foot, navigation, Drawer)}
          {TabBtns(currentTab, setCurrentTab, "Smart Recommendations", chat, navigation, Drawer)}
        </View>
        <View>
          {TabBtns(currentTab, setCurrentTab, "LogOut", logout)}
        </View>
      </View>













      {
        // Over lay view
      }
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        borderRadius: showMenu ? 15 : 0,
        // transformaing view
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>


        <Animated.View style={{
          flex: 1,
          paddingTop: showMenu ? 30 : 0,
          alignItems: 'center',
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>


          {/************* Header ***********/}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#007fcb',
            height: 60,
            width: '100%',
            borderTopRightRadius: showMenu ? 15 : 0,
            borderTopLeftRadius: showMenu ? 15 : 0,
          }}>

            {/*********** Menu Button *********/}
            <TouchableOpacity onPress={Drawer}>
              <Icon name={showMenu ? 'close' : 'menu'} color="white" size={30} style={{ marginLeft: 15 }} />
            </TouchableOpacity>

            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 20
            }}
            >Home</Text>
          </View>


          <Image source={require('../../images/logo/logo_png_name.png')} style={{
            width: "50%",
            height: '38%',
            resizeMode: 'contain'
          }} />
          <ScrollView>
            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("Workouts")
            }}>
              <View style={styles.card}>
                <Image source={workout} style={styles.cardImg} />
                <Text style={styles.cardTxt}>Daily Workouts for Home</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("Diets")
            }}>
              <View style={styles.card}>
                <Image source={diet} style={styles.cardImg} />
                <Text style={styles.cardTxt}>Diets</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("MentalHealth")
            }}>
              <View style={styles.card}>
                <Image source={Mental} style={styles.cardImg} />
                <Text style={styles.cardTxt}>Mental Health</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("Water")
            }}>
              <View style={styles.card}>
                <Image source={water} style={styles.cardImg} />
                <Text style={styles.cardTxt}>Water Tracker</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("BMI")
            }}>
              <View style={styles.card}>
                <Image source={bmi} style={styles.cardImg} />
                <Text style={styles.cardTxt}>Calculate Your BMI</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("Footsteps Counter")
            }}>
              <View style={styles.card}>
                <Image source={foot} style={{ ...styles.cardImg, width: '16%' }} />
                <Text style={styles.cardTxt}>Footsteps Tracking</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              if (showMenu) {
                Drawer();
              }
              navigation.navigate("Chats")
            }}>
              <View style={styles.card}>
                <Image source={chat} style={styles.cardImg} />
                <Text style={styles.cardTxt}>Smart Recommendations</Text>
                <Icon name="chevron-forward-circle" size={25} color="#469433" />
              </View>
            </TouchableOpacity>
          </ScrollView>


        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007fcb',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    paddingHorizontal: 9,
    elevation: 3,


  },
  cardImg: {
    resizeMode: 'contain',
    width: "12%",
    height: '100%',
    tintColor: '#007fcb'
  },
  cardTxt: {
    fontSize: 14,
    width: '60%',
    fontWeight: 'bold',
    color: 'rgb(80, 80, 80)'
  }
});






















// Navigation buttons...
const TabBtns = (currentTab, setCurrentTab, title, image, navigation, Drawer) => {
  return (
    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'));
      } else {
        Drawer();
        navigation.navigate(title)
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: currentTab == title ? "#469433" : 'transparent',
        paddingLeft: 5,
        // paddingRight: 10,
        marginTop: 10
      }}>
        <Image source={image} style={{ width: 30, height: title == 'Footsteps Counter' ? 35 : 30, tintColor: 'white' }} />
        <Text style={{
          fontSize: 15,
          fontWeight: '400',
          color: "#fff",
          paddingLeft: 5
        }}
        >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}