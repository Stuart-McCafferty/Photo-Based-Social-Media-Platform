import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import GLOBAL from "../GLOBAL";
import Header from "../components/Header";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import Profile from "../components/Profile";
import Feed from "../components/Feed";
import Settings from "../components/Settings";
import Registration from "../components/Registration";
import SignIn from "../components/SignIn";
import Search from "../components/Search";
import Challenges from "../components/Challenges";
import Notifications from "../components/Notifications";
import ProfileList from "../components/ProfileList";

const Stack = createStackNavigator();

class FeedStack extends React.Component {
  render() {
    return (
      <Stack.Navigator>
	<Stack.Screen
	  name="Home"
	  component={Feed}
	  options={{ title: "Feed" }}
	/>
	<Stack.Screen
	  name="Profile"
	  component={Profile}
	  options={{ title: "Profile" }}
	/>
	<Stack.Screen
	  name="Leaderboard"
	  component={Leaderboard}
	  options={{ title: "Leaderboard" }}
	/>
	<Stack.Screen
	  name="Challenges"
	  component={Challenges}
	  options={{ title: "Challenges" }}
	/>
	<Stack.Screen
	  name="ProfileList"
	  component={ProfileList}
	  options={{ title: "List" }}
	/>
	<Stack.Screen
	  name="Search"
	  component={Search}
	  options={{ title: "Search" }}
	/>
      </Stack.Navigator>
    );
  }
}

export default FeedStack;
