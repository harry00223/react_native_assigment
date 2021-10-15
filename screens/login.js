import * as React from 'react';
import { View, Text,Image, TouchableOpacity,StyleSheet} from 'react-native';

import { AntDesign  } from '@expo/vector-icons'; 

  export default function Login({ navigation }) {
  return (
    
    <View style={styles.container}>
      <View>
      <Image source={require('../love.jpg')} style={{ width: 220, height: 220 ,borderRadius:20, transform: [{ rotate: '45deg' }]}} />
      </View>
      <View>
      <Text style={{fontSize:30, marginTop:40}}> Welcome to </Text>
      <Text style={{fontSize:30}}> Power Bike Shop </Text>
    </View>
    <TouchableOpacity style={{width:'100%'}}>
      <View style={styles._gmail} >
      <AntDesign name="google" size={24} color="red" />  
        <Text  style={styles.gmail}> Login with Gmail</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'100%'}}>
      <View style={styles._apple}>
      <AntDesign name="apple1" size={24} color="white" />
          <Text style={styles.apple}>Login with Apple </Text>
      </View >
      </TouchableOpacity>
      <View style={styles._signup} >
      <Text style={{marginRight:20}} >  Not a member?</Text>
       <TouchableOpacity> 
         <Text  onPress={() => navigation.navigate('Shop')}> sign up</Text>
         </TouchableOpacity>
      </View>
      <Text>Home Screen </Text>
        
      </View>
  )};
  const styles = StyleSheet.create({
    container:{
       flex: 1, 
       alignItems: 'center', 
       justifyContent: 'center' ,
       marginLeft:20,
          marginRight:20
    },
    _gmail:{
  
           display:"flex",
           flexDirection:'row',
           justifyContent:'center',
           alignContent:"center",
           padding:20,
          width:'100%',
          backgroundColor:`#f0ffff`,
          
          borderRadius:20
          
    },
    gmail:{
      
      alignSelf:'center',
      fontSize:15
    },
    _apple:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'center',
       backgroundColor:'black',
       width:'100%',
       padding:20,
       borderRadius:20,
       marginTop:10
    },
    apple:{
      
      fontSize:15,
      alignSelf:"center",
      color:'white'
    },
    _signup:{
      display:'flex',
      flexDirection:'row'
    }
    
  });