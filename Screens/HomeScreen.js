import React from 'react';
import {Button, View, Text, Dimensions} from 'react-native';
import {TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const HomeScreen = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white' }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('..//assets/icons/asap.png')}
          style={{margin: 30}}
        />
        </View>

        <Text
          style={{
            marginLeft: 25,
            fontSize: 20,
            fontFamily: 'Raleway-ExtraBold',
            opacity: 0.9,
            
          }}>
          SignUp
        </Text>
        <View style={styles.line} />
        <View style={{ marginHorizontal:20}}>
         <Text style={styles.text}> First Name </Text>
          <TextInput style={styles.inputs}> </TextInput>
          <Text style={styles.text}> Last Name</Text>
          <TextInput style={styles.inputs}> </TextInput>
          <Text style={styles.text}> Mail-Id</Text>
          <TextInput style={styles.inputs}> </TextInput>
          <Text style={styles.text}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.inputs}></TextInput>
        </View>
        
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'white', padding: 12}}>SignUp</Text>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 40 ,alignItems:"center" ,justifyContent:'center'}}>
          <Text style={{fontFamily: 'Raleway' ,color:'gray',fontSize:15}}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
                fontFamily: 'Raleway-Bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  inputs: {
    height: 50,
    width: Dimensions.get('screen').width - 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    
    fontSize: 15,
    color: 'gray',
    marginTop: 20,
    marginLeft: 5,

    fontFamily: 'Raleway-Medium',
  },
  btn: {
    height: 50,
    marginHorizontal:20,
    width: Dimensions.get('screen').width - 50,
    backgroundColor: '#b20d30',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 50,
  },

  line: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width:Dimensions.get('screen').width - 50,
    opacity: 0.1,
    marginHorizontal:20,
  },
});

export default HomeScreen;
