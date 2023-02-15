import React, { useState } from 'react'
import { NativeBaseProvider,Text,Input,Button,HStack, Pressable,Icon,Link,Box } from 'native-base'
import { Alert,ImageBackground,StyleSheet,View } from 'react-native';
import { firebase } from './config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login({navigation}) {


  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
 
  
  
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#2d3436" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" bold  mt="20%" color='white' alignItems={"center"}>My App</Text>
        <Box alignItems={"center"} padding={15}>
 
            <Input mx="4" placeholder="Email" w="80%" value={email} borderRadius={10} onChangeText={(e)=>{setEmail(e)}} marginTop={20} bgColor="#636e72"/>
            <Input type='password' mx="4" placeholder="Password" value={password} onChangeText={(e)=>{setPassword(e)}}  w="80%" borderRadius={10} marginTop={5} bgColor="#636e72"/>
           
              <Button size="lg" variant="link"   w={200}  >
                <Text style={styles.innerText}>Forgot Password ?</Text>
                        
              </Button>
            
            

            <Button size="lg" variant="solid" bgColor={'#fdcb6e'} borderRadius={10}  marginTop={8} w={300} colorScheme="black" onPress={()=>{navigation.navigate("welcome")}}>
            <Text style={styles.ttn}> sign in</Text>
                     
            </Button>
        </Box>
        
            <Button size="lg" variant="link" style={styles.btn}  marginTop={8} w={800} onPress={()=>{navigation.navigate("signup")}} >
            <Text style={styles.innerText}>Don't have an account ?
                  <Text style={styles.txt} underline> sign up</Text>
                  </Text>  
            </Button>
            
      </Box>

    </NativeBaseProvider>
  )
}
var styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', 
  },
  innerText: {
    color: 'white',
  
  },
  txt: {
    color: '#fdcb6e',
  
  },
  ttn: {
    color: 'black',
    fontSize:20,
  
  },

});
