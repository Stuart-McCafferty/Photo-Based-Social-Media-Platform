//imports
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Navigation imports
import FeedStackNav from './FeedStack';
import CameraStackNav from './CameraStack';
import ExploreStackNav from './ExploreStack';

//create navigation
const Tab = createBottomTabNavigator();


export default function MainTab(){
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#28865C',
        inactiveTintColor: '#14432E',
        style: { backgroundColor: 'white'}
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedStackNav}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraStackNav}
          options={{
            tabBarLabel: 'camera',
            tabBarIcon: ({ color, size }) => (
              <Icon name="camera" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackNav}
          options={{
            tabBarLabel: 'explore',
            tabBarIcon: ({ color, size }) => (
              <Icon name="globe" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
  )
}
