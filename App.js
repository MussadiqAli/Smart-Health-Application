import React, { useState, useEffect } from 'react';
import LoginScreen from './scr/components/loginScreens/LoginScreen';
import Signin from './scr/components/loginScreens/Signin';
import Signup from './scr/components/loginScreens/Signup';
import ForgatPassword from './scr/components/loginScreens/ForgatPassword';
import AppNavigation from './scr/components/appScreens/AppNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ForgatPassword" component={ForgatPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  return (
    <AppNavigation initialParams={{'user': user}} />
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};


export default App;
