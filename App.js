//imports
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screen imports here
/*
import CameraScreen from './src/screens/CameraScreen/CameraScreen';
import ExploreScreen from './src/screens/ExploreScreen/ExploreScreen';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
*/

import Navigation from './src/navigations/navigation';



//TESTING - simpler when nothing is in the way
import CameraScreen from './STUARTS SCREENS/CameraScreen';
import ExploreScreen from './STUARTS SCREENS/ExploreScreen';
import FeedScreen from './STUARTS SCREENS/FeedScreen';
import LeaderboardScreen from './STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from './STUARTS SCREENS/ProfileScreen';
import NotifcationsScreen from './STUARTS SCREENS/NotificationScreen';
import ChallengeScreen from './STUARTS SCREENS/ChallengeScreen';




export default function App() {
  return (
    <Navigation />
  );
}
