import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CameraScreen from './screens/CameraScreen';
import ExploreScreen from './screens/ExploreScreen';
import FeedScreen from './screens/FeedScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import ProfileScreen from './screens/ProfileScreen';

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
