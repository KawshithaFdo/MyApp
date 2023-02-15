import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {

const [isGo,setisGo]=useState(true);
const navigation=useNavigation();

useEffect(()=>{ 
    if(isGo == true){
        setTimeout(()=>{
            navigation.navigate("login");
            setisGo(false);
        },2000);
    }
});
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#2d3436"}}>
        <TouchableOpacity>
            <Text  style={styles.innerText}>MyApp</Text>
        </TouchableOpacity>
     
    </View>
  )
}
const styles = StyleSheet.create({
    innerText: {
      color: 'white',
      fontSize:50,
      textAlign:'center',
      fontWeight:'bold'
    
    },
  });