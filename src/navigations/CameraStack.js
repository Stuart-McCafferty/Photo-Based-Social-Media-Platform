import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const CameraStack = createStackNavigator();

//screen imports
import CameraScreen from '../../STUARTS SCREENS/CameraScreen';
import ExploreScreen from '../../STUARTS SCREENS/ExploreScreen';
import FeedScreen from '../../STUARTS SCREENS/FeedScreen';
import LeaderboardScreen from '../../STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from '../../STUARTS SCREENS/ProfileScreen';
import NotifcationsScreen from '../../STUARTS SCREENS/NotificationScreen';
import ChallengeScreen from '../../STUARTS SCREENS/ChallengeScreen';
import LoginScreen from '../../STUARTS SCREENS/LoginScreen';

export default function CameraStackNav(){
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen name="Camera" component={CameraScreen} />
    </CameraStack.Navigator>
  )
}
