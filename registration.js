import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native';

export default class Regis extends Component{
  
  
  render(){
    return(
      <View style={styles.view}>
        <Text style={styles.heading}>Registration</Text>

          <TextInput style={styles.textinput} placeholder="Enter First Name" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter Middle Name" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter Last Name" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter Address" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter City" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter Birthday" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter Gender" placeholderTextColor="grey"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter password" placeholderTextColor="grey" secureTextEntry="true"></TextInput>
          <TextInput style={styles.textinput} placeholder="Enter Conform Password" placeholderTextColor="grey" secureTextEntry="true"></TextInput>
          <TouchableOpacity style={styles.button}>Submit</TouchableOpacity>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  button:{
      backgroundColor:"blue",
      color:"white",
      fontSize:22,
      marginTop:15,
      marginLeft:10,
      marginRight:5,
      textAlign:"center"
  },
  view:{
    flex:1,
    backgroundColor:"lightgrey"
  },
  heading:{
    fontSize:25,
    marginTop:30,
    fontWeight:"bold",
    textAlign:"center"
  },
  textinput:{
      borderWidth:1,
      width:360,
      
      marginLeft:10,
      marginRight:10,
      marginTop:20,
      borderLeftColor:"transparent",
      borderRightColor:"transparent",
      borderTopColor:"transparent"
  },
  /*text:{
      fontSize:17,
     fontWeight:"bold",
     marginTop:10 
  }*/
})