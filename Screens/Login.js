import React from 'react';
import {Text,StyleSheet, View ,Button,Image ,TextInput ,TouchableOpacity, Dimensions} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Login = ({navigation}) => {
    return (
      <KeyboardAwareScrollView style={{flex:1 ,backgroundColor:'white'}}> 
       <View style={{marginHorizontal:30}}>        
         <View style={{ 
          flex: 1,
      alignItems:"center",
      backgroundColor:"white",
      paddingTop:20,
      }}>

<Image source={require('../assets/icons/asap.png')}/> 
            

      </View>
     <View style={styles.container}>
     <Text style={{marginRight:"auto" ,marginLeft:10, fontSize:20,fontFamily: 'Raleway-ExtraBold',opacity:0.8}}>LogIn</Text>

 <View
  style={{
    borderBottomWidth: 2,
    borderBottomColor: 'black',
   
    opacity:0.1,
    width:Dimensions.get('screen').width - 50,
   
    marginHorizontal:20,
  }}/>


             <Text style={styles.text}>First Name </Text>
       <TextInput style={styles.inputs}> </TextInput>
       <Text style={styles.text}> Password</Text>
       <TextInput style={styles.inputs} secureTextEntry={true} > </TextInput>
<TouchableOpacity  style={{ marginLeft:"auto",}} onPress={()=>navigation.navigate('ForgotPassword')}>
  
  <Text style={{
    marginRight:10,
    fontSize:15,
    marginTop:10,
   opacity:0.4}}>
  Forgot Password?</Text></TouchableOpacity>
       <TouchableOpacity
           style={styles.btn} >
          <Text style={{color:'white',padding:12}}>Login</Text>
          </TouchableOpacity>
<View style={{flex:1, flexDirection:"row", paddingTop:50}}>
          <Text>Don't have an account?</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
           <Text style={{fontWeight:'bold',marginLeft:10}}>Sign up?</Text>
           </TouchableOpacity>
           </View>
   </View>
      </View>
   </KeyboardAwareScrollView> 
    );
};
 
const styles = StyleSheet.create({
  inputs:{
    height: 50,
    width :Dimensions.get('screen').width-50,
    borderColor:'gray',
    borderWidth: 1,
    borderRadius:10,
    marginTop:5,
    
  },  
  
  container: {
      flex: 2,
      alignItems:"center",
      backgroundColor:"white",
      paddingTop:20
      
    },                      
  
            
    tinyLogo:{
    width: 80,
    height: 80,  
    padding:50,
    
    
    },
   text:{
    marginRight:"auto",
    fontSize:15,
    marginTop:35,
    marginLeft:5,
    color:'grey',
    fontFamily: 'Raleway-Medium',
      },

      btn:{
        height: 50, 
        width :Dimensions.get('screen').width - 50,
        backgroundColor:"#b20d30", 
        borderWidth: 1,
        borderRadius:10, 
        alignItems: "center",
        marginTop:50
       
      }
    });
  

export default Login;