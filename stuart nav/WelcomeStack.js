import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const WelcomeStack = createStackNavigator();

//screen imports
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from '../screens/LoginScreen/ResetPasswordScreen';
import SignupScreen from '../screens/LoginScreen/SignupScreen';
import WelcomeScreen from '../screens/LoginScreen/WelcomeScreen';


export default function WelcomeStackNav(){
  return(
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="Login" component={LoginScreen} />
      <WelcomeStack.Screen name="Signup" component={SignupScreen} />
      <WelcomeStack.Screen name="Reset Password" component={ResetPasswordScreen} />
    </WelcomeStack.Navigator>
  )
}
