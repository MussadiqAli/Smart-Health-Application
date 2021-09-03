import React,{useState, useEffect} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './Home';
import Workouts from './Workouts'
import FootStepCount from './FootSteps/FootStepCounter';
import Diets from './diets/Diets';
import Water from './water/Water';
import Chats from './Chat/Chats';
import BMI from './BMI/BMIcalculator';
import database from '@react-native-firebase/database';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function AppNavigation({initialParams}) {
  useEffect(() => {
    saveUser();
  }, []);
  
  const [userData, setUserData] = useState({
    name: initialParams.user.displayName,
    email: initialParams.user.email,
    profilePic: initialParams.user.photoURL,
    uid: initialParams.user.uid
  })

   const saveUser = () =>{
    database().ref('/').child(`users/${userData.uid}`).set(userData)
  }


  return (   
    <Stack.Navigator initialRouteName="Home"  screenOptions={{ 
      headerStyle: { backgroundColor: '#007fcb', },
      headerTitleStyle:{color: 'white', fontSize: 16, fontWeight: 'bold'}, 
      headerTintColor:"white" }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Workouts" component={Workouts} options={{headerShown:false}}/>
        <Stack.Screen name="Diets" component={Diets}  options={{headerShown:false}} />
        <Stack.Screen name="Water" component={Water} options={{title: "Daily Drink Target"}} />
        <Stack.Screen name="Footsteps Counter" component={FootStepCount} options={{title: "Walking Target"}} />
        <Stack.Screen name="Chats" component={Chats} options={{headerShown:false}} initialParams={{'user': initialParams.user}} />
        <Stack.Screen name="BMI" component={BMI} options={{title:'BMI Calculator'}}/>
    </Stack.Navigator>
  );
}