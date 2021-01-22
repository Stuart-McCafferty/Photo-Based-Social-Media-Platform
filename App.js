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



//TESTING - simpler when nothing is in the way
import CameraScreen from './STUARTS SCREENS/CameraScreen';
import ExploreScreen from './STUARTS SCREENS/ExploreScreen';
import FeedScreen from './STUARTS SCREENS/FeedScreen';
import LeaderboardScreen from './STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from './STUARTS SCREENS/ProfileScreen';
import NotifcationsScreen from './STUARTS SCREENS/NotificationScreen';
import ChallengeScreen from './STUARTS SCREENS/ChallengeScreen';

//creates navigation
const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const CameraStack = createStackNavigator();
const ExploreStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed">
          {() => (
            <FeedStack.Navigator>
              <FeedStack.Screen name="Feed" component={FeedScreen} />
              <FeedStack.Screen name="Leaderboard" component={LeaderboardScreen} />
              <FeedStack.Screen name="Profile" component={ProfileScreen} />
              <FeedStack.Screen name="Notification" component={NotifcationsScreen} />
            </FeedStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Camera">
          {() => (
            <CameraStack.Navigator>
              <CameraStack.Screen name="Camera" component={CameraScreen} />
            </CameraStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Explore">
          {() => (
            <ExploreStack.Navigator>
              <ExploreStack.Screen name="Explore" component={ExploreScreen} />
              <ExploreStack.Screen name="Profile" component={ProfileScreen} />
              <ExploreStack.Screen name="Notification" component={NotifcationsScreen} />
              <ExploreStack.Screen name="Challenge" component={ChallengeScreen} />
              <ExploreStack.Screen name="Leaderboard" component={LeaderboardScreen} />
            </ExploreStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
