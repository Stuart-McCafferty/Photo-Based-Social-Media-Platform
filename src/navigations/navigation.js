import * as React from 'react';
import { Button, Text, Image, View, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

//screen imports here
/*
import CameraScreen from './src/screens/CameraScreen/CameraScreen';
import ExploreScreen from './src/screens/ExploreScreen/ExploreScreen';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
*/

//TESTING - COMMENT THESE OUT
import CameraScreen from '../../STUARTS SCREENS/CameraScreen';
import ExploreScreen from '../../STUARTS SCREENS/ExploreScreen';
import FeedScreen from '../../STUARTS SCREENS/FeedScreen';
import LeaderboardScreen from '../../STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from '../../STUARTS SCREENS/ProfileScreen';
import NotifcationsScreen from '../../STUARTS SCREENS/NotificationScreen';
import ChallengeScreen from '../../STUARTS SCREENS/ChallengeScreen';
import LoginScreen from '../../STUARTS SCREENS/LoginScreen';

//component imports
import ProfileIcon from '../components/ProfileIcon';
import NotificationIcon from '../components/NotificationIcon';

//navigation imports
import FeedStackNav from './FeedStack';
import CameraStackNav from './CameraStack';
import ExploreStackNav from './ExploreStack';
import MainTab from './MainTab';
import WelcomeStackNav from './WelcomeStack';

//create navigation
const RootStack = createStackNavigator();


const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}} >
        <RootStack.Screen name="WelcomeStackNav" component={WelcomeStackNav} />
        <RootStack.Screen name="MainTab" component={MainTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;
