//imports
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
>>>>>>> parent of c853faa (partial settings screen)


<<<<<<< HEAD
//file imports
import Navigation from './src/navigations/navigation';
=======
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
	<Stack.Navigator>
	  <Stack.Screen
	    name="Home"
	    component={Feed}
	    options={{ title: "Eden" }}
	  />
	  <Stack.Screen
	    name="Leaderboard"
	    component={Leaderboard}
	    options={{ title: "Leaderboard" }}
	  />
	  <Stack.Screen
	    name="Profile"
	    component={Profile}
	    options={{ title: "Profile" }}
	  />
	</Stack.Navigator>
      </NavigationContainer>
    );
  }
}
>>>>>>> parent of c853faa (partial settings screen)

export default function App() {
  return (

    <Navigation />
  );
}
