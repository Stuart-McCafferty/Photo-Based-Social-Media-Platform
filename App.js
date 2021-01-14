import * as React from 'react';
import { View, Text, Button } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CameraScreen from './src/screens/CameraScreen/CameraScreen';
import ExploreScreen from './src/screens/ExploreScreen/ExploreScreen';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

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
            <FeedStack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f5f5f5',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <FeedStack.Screen name="Feed" component={FeedScreen} />
              <FeedStack.Screen name="Leaderboard" component={LeaderboardScreen} />
              <FeedStack.Screen name="Profile" component={ProfileScreen} />
            </FeedStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Camera">
          {() => (
            <CameraStack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f5f5f5',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <CameraStack.Screen name="Camera" component={CameraScreen} />
            </CameraStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Explore">
          {() => (
            <ExploreStack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f5f5f5',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <ExploreStack.Screen name="Explore" component={ExploreScreen} />
            </ExploreStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
