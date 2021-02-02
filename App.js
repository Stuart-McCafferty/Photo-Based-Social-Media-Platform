//imports
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//file imports
import Navigation from './src/navigations/navigation';

export default function App() {
  return (
    <Navigation />
  );
}
