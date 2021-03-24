import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const WelcomeStack = createStackNavigator();

//screen imports
import LoginScreen from '../../STUARTS SCREENS/LoginScreen';
import ResetPasswordScreen from '../../STUARTS SCREENS/ResetPasswordScreen';
import SignupScreen from '../../STUARTS SCREENS/SignupScreen';
import WelcomeScreen from '../../STUARTS SCREENS/WelcomeScreen';
import c from '../../STUARTS SCREENS/c';
import ChallengeScreen from '../../STUARTS SCREENS/ChallengeScreen';


export default function WelcomeStackNav(){
  return(
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="Login" component={LoginScreen} />
      <WelcomeStack.Screen name="Signup" component={SignupScreen} />
      <WelcomeStack.Screen name="Reset Password" component={ResetPasswordScreen} />
      <WelcomeStack.Screen name="Challenge" component={ChallengeScreen} />
    </WelcomeStack.Navigator>
  )
}
