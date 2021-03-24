import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Settings from "./components/Settings";

const Stack = createStackNavigator();

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
	  <Stack.Screen
	    name="Settings"
	    component={Settings}
	    options={{ title: "Settings" }}
	  />
	</Stack.Navigator>
      </NavigationContainer>
    );
  }
}

registerRootComponent(App);

export default App;
