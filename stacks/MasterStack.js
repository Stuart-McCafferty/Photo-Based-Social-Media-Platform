//imports
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons'; 

//Navigation imports
import FeedStack from './FeedStack';
import CameraStack from './CameraStack';
import ExploreStack from './ExploreStack';

//create navigation
const Tab = createBottomTabNavigator();


export default function MasterStack(){
  return (
    <NavigationContainer>
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
	  component={FeedStack}
	  options={{
	    tabBarLabel: 'feed',
	    tabBarIcon: ({ color, size }) => (
		  <MaterialIcons name="dynamic-feed" size={30} color={color}/>
	    ),
	  }}
	/>
	<Tab.Screen
	  name="Camera"
	  component={CameraStack}
	    options={{
	      tabBarLabel: 'camera',
	      tabBarIcon: ({ color, size }) => (
		<Icon name="camera" color={color} size={size} />
	      ),
	    }}
	/>
	<Tab.Screen
	  name="Explore"
	  component={ExploreStack}
	    options={{
	      tabBarLabel: 'explore',
	      tabBarIcon: ({ color, size }) => (
		<Icon name="globe" color={color} size={size} />
	      ),
	    }}
	  />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
