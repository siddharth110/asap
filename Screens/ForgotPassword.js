import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const ForgotPassword = () => {
  return (
    <KeyboardAwareScrollView  style={{flex:1 ,backgroundColor:'white'}}>
      <View style={styles.container}>

    
   
  <Image source={require('../assets/icons/asap.png')}/>

  <Text style={{marginRight:"auto",marginLeft:10, fontSize:20,fontWeight:"bold",opacity:0.8,marginTop:50}}>ForgotPassword</Text>

<View
 style={{
   borderBottomWidth: 2,
   borderBottomColor: 'black',
   width: 500,
   opacity:0.1
 }}/>  

</View>
<Text style={{ marginRight:"auto",
     fontSize:20,
     marginTop:70,
     marginLeft:5,
     opacity:0.4,
     fontFamily:'Lato-Black'}} >Enter the E-mail address associated with your account</Text>

<Text style={styles.text}> E-mail Address</Text>
       <TextInput style={styles.inputs} placeholder="Enter email address"> </TextInput>
       <TouchableOpacity
           style={styles.btn} >
          <Text style={{color:'white',padding:10, fontSize:20}}>Reset Password</Text>
          </TouchableOpacity>
 </KeyboardAwareScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor:'white'
  },
  tinyLogo:{
    width: 50,
    height: 50,  
    padding:50
    },
    inputs:{
      height: 50,
      width :400,
      borderColor:'gray',
      borderWidth: 1,
      borderRadius:10,
      marginTop:5,
      opacity:0.3
    },
    text:{
     marginRight:"auto",
     fontSize:25,
     marginTop:50,
     marginLeft:5,
     opacity:0.4,
     fontFamily:'Raleway-Light'
       },

       btn:{
        height: 50, 
        width:Dimensions.get('screen').width-50 ,
        backgroundColor:"#b20d30", 
        borderWidth: 1,
        borderRadius:10, 
        alignItems: "center",
        marginTop:100
       
      }
  
});

export default ForgotPassword;