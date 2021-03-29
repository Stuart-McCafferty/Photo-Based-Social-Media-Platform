import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { COLOR_PRIMARY } from "../components/styles";
import GLOBAL from "../GLOBAL";
import HeaderModal from "../components/HeaderModal";
import Header from "../components/Header";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import Profile from "../components/Profile";
import Feed from "../components/Feed";
import Settings from "../components/Settings";
import Registration from "../components/Registration";
import SignIn from "../components/SignIn";
import Search from "../components/Search";
import Challenges from "../components/ChallengeScreen/Challenges";
import Challenge from "../components/Challenge";
import Notifications from "../components/Notifications";
import ProfileList from "../components/ProfileList";
import AnalyticScreen from '../components/AnalyticScreen';
import NotificationIcon from '../components/NotificationIcon';


const Stack = createStackNavigator();

class FeedStack extends React.Component {

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerLeft: null,
	  headerStyle: {
	    borderBottomWidth: 0,
	    backgroundColor: COLOR_PRIMARY,
	    shadowColor: '#000',
	    shadowOpacity: 0.25,
	    shadowRadius: 20,
	    shadowOffset: { width: 0, height: 0 }
	  },
      headerTintColor: 'white',
          headerRight: () =>
          <View style={styles.iconContainer}>
          <>
          <NotificationIcon />
          <HeaderModal />
          </>
          </View>
        }}
    >
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
	  name="ChallengePage"
	  component={Challenge}
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
	<Stack.Screen
	  name="Registration"
	  component={Registration}
	  options={{ title: "Register" }}
	/>
  <Stack.Screen
    name="Analytics"
    component={AnalyticScreen}
    options={{ title: "Analytics" }}
  />
  <Stack.Screen
    name="Notifications"
    component={Notifications}
    options={{ title: "Notifications" }}
  />
      </Stack.Navigator>
    );
  }
}

export default FeedStack;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 5
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 90,
  }
});
