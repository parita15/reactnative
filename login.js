import React,{Component} from 'react';
import {Alert,TouchableOpacity,View,Text,TextInput,StyleSheet} from 'react-native';

export default class Login extends Component{
  state={username : "",password : ""}
  oncheck(){
        const{username,password}=this.state;
     if(username=="admin" && password=="admin")
    {
      Alert.alert("success","valid username or password",[{text:"OK"}]);
    }   
    else
    {
      alert("invalid username or password");
    }
    }
    
  render(){
    
    return(
           <View style={styles.view1}> 
              <Text style={styles.text}>Login Into The System</Text>
            <TextInput style={styles.textinput} placeholder="Enter Username or Email" maxLength="10" blurOnSubmit="true" onChangeText={text=>this.setState({username:text})}></TextInput>
            

                  <TextInput style={styles.textinput}  placeholder="Enter Password" maxLength="10" secureTextEntry="true" onChangeText={text=>this.setState({password:text})} ></TextInput>
            
              <TouchableOpacity style={styles.button} onPress={()=>this.oncheck()} >Submit</TouchableOpacity>
                            <TouchableOpacity style={styles.buttonreg}  >Register</TouchableOpacity>
            </View>
      
    );
  }
}
const styles=StyleSheet.create({
  button:{
      backgroundColor:"blue",
      fontSize:25,
      color:"white",
      fontWeight:"bold",
      alignItems:"center",
      marginLeft:20,
      marginRight:5,
      marginTop:10
  },
  buttonreg:{
      backgroundColor:"darkblue",
      fontSize:25,
      color:"white",
      fontWeight:"bold",
      alignItems:"center",
      marginLeft:20,
      marginRight:5,
      marginTop:10
  },
  text:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:20
  },
  view1:{
    backgroundColor:"lightgrey",
    flex:1
    //justifyContent:"center"
  },
  textinput:{
      height:40,
      width:300,
      borderWidth:2,
      borderStyle:"solid",
      textAlignVertical:"bottom",
      borderColor:"grey",
      marginLeft:20,
      marginRight:50,
      marginTop:10,
      borderBottomColor:"black",
      borderLeftColor:"transparent",
      borderRightColor:"transparent",
      borderTopColor:"transparent"
    }
})