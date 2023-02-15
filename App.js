import { View, Text } from 'react-native'
import React , { useState ,useEffect}from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login/Login';
import Splash from './screens/splash/Splash';
import Signup from './screens/signup/Signup';
import Welcome from './screens/welcome/Welcome';
import Profile from './screens/profile/Profile';
import { firebase } from './config';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createStackNavigator();

function App() {

  
  const [initializing,setInitializing]=useState(true);
  const [user,setUser]=useState();

//   // Handle user state
// const auth= getAuth();
//  onAuthStateChanged(auth,(user)=>{
//   setUser(user);
//   if(initializing)setInitializing(false);
//  })
 


// useEffect(()=>{
//   const subscriber= firebase.auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber;
// },[]);

// if(initializing)return null;


if(!user){
  return(
      <Stack.Navigator initialRouteName='Splash'> 
        <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}} name="signup" component={Signup} />
        <Stack.Screen options={{headerShown:false}} name="welcome" component={Welcome} />
      <Stack.Screen options={{headerShown:false}} name="profile" component={Profile} /> 
      </Stack.Navigator>
  )
}


  return (
  
      <Stack.Navigator initialRouteName='Splash'> 
           
    </Stack.Navigator>
     
    
  )
}
export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}