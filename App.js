import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login/Login';
import Splash from './screens/splash/Splash';
import Signup from './screens/signup/Signup';
import Welcome from './screens/welcome/Welcome';
import Profile from './screens/profile/Profile';

const Stack = createStackNavigator();

export default function App() {

  

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'> 
      <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
      <Stack.Screen options={{headerShown:false}} name="signup" component={Signup} />
      <Stack.Screen options={{headerShown:false}} name="welcome" component={Welcome} />
      <Stack.Screen options={{headerShown:false}} name="profile" component={Profile} />      
    </Stack.Navigator>
   </NavigationContainer>
     
    
  )
}