
import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './Screens/ForgotPassword';





const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName={'Login'}
    >
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
     
     </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
