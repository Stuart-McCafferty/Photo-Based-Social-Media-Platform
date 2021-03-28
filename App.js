import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import MasterStack from "./stacks/MasterStack";

class App extends React.Component {
  render() {
    return (
      <MasterStack />
    );
  }
}

registerRootComponent(App);

export default App;
