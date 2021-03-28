import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { Text, View } from 'react-native';
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
import FeedStack from "./FeedStack";
import CameraStack from "./CameraStack";
import ExploreStack from "./ExploreStack";

const Tab = createBottomTabNavigator();

class MasterStack extends React.Component {
  render() {
    return (
      <NavigationContainer>
	<Tab.Navigator>
	  <Tab.Screen
	    name="Home"
	    component={FeedStack}
	    options={{ title: "Home" }}
	  />
	  <Tab.Screen
	    name="Camera"
	    component={CameraStack}
	    options={{
	      title: "Camera",
	    }}
	  />
	  <Tab.Screen
	    name="Explore"
	    component={ExploreStack}
	    options={{ title: "Explore" }}
	  />
	</Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default MasterStack;
