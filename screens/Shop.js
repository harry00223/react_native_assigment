import * as React from 'react';
import { View, Text,ScrollView,StyleSheet} from 'react-native';

import { AntDesign,Entypo ,MaterialCommunityIcons, Ionicons,MaterialIcons,Feather    } from '@expo/vector-icons'; 

export default function Shop() {
  return (
    <View style={styles2.container}>
      <View style={styles2.head_bar}>
      <Entypo name="menu" size={24} color="black" />
      <MaterialCommunityIcons name="motorbike" size={24} color="black" />
      <View style={{display:'flex',flexDirection:'row'}}>
      <AntDesign name="search1" size={24} color="black" />
      <Ionicons name="notifications" size={24} color="black" />
      </View>
      </View>
      <Text >
        The world's best bike 
      </Text>
      <Text >
        Category
      </Text>
      <View>
        <ScrollView horizontal={true} style={{width:1000}}>
        <View >
        <Text style={styles2.scrolable_text}>
          All
        </Text>
        </View>
        <Text style={styles2.scrolable_text}>
          Roadbike
        </Text >
        <Text style={styles2.scrolable_text}>
          Mountian
        </Text>
        <Text style={styles2.scrolable_text}>
          Urban
        </Text >
        </ScrollView>
      </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles2.item_holder}></View>
          <View style={styles2.item_holder}></View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles2.item_holder}></View>
          <View style={styles2.item_holder}></View>
        </View>
        <MaterialIcons name="keyboard-voice" size={24} color="white" style={{alignSelf:"center",backgroundColor:'black',padding:10,borderRadius:20,overflow: 'hidden'
        }} />
        
        <View style={styles2.footer}>
        <Entypo name="home" size={24} color="black" />
        <Feather name="lock" size={24} color="black" />
        </View>
      </View>
    
  );
}
const styles2 = StyleSheet.create({
  container:{
    flexDirection:'column',
   flex: 1,
   marginLeft:20,
   marginRight:20,
    justifyContent: 'center' 
  },
  head_bar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  scrolable_text:{
     backgroundColor:'floralwhite',
     borderRadius:40,
     margin:10,
     fontSize:10,
     padding:20,
     borderRadius:20,
     overflow: 'hidden'
  },
  item_holder:{
     padding:80,
     backgroundColor:'floralwhite',
     borderRadius:20,
     marginTop:20
  },
  footer:{
    backgroundColor:'floralwhite',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
    
  }
 }
 
 );