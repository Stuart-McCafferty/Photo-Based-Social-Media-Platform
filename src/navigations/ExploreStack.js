import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const ExploreStack = createStackNavigator();

//temp screen imports
import ChallengeScreen from '../screens/ChallengeScreen/ChallengeScreen';
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import NotifcationsScreen from '../screens/NotificationScreen/NotificationScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen/LeaderboardScreen';


//component imports
import ProfileIcon from '../components/ProfileIcon';
import NotificationIcon from '../components/NotificationIcon';

export default function ExploreStackNav(){
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerRight: () => (
          <View style={styles.iconContainer}>
          <>
          <ProfileIcon />
          <NotificationIcon />
          </>
          </View>
        ),
      }}
    >
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Profile" component={ProfileScreen} />
      <ExploreStack.Screen name="Notification" component={NotifcationsScreen} />
      <ExploreStack.Screen name="Challenge" component={ChallengeScreen} />
      <ExploreStack.Screen name="Leaderboard" component={LeaderboardScreen} />
    </ExploreStack.Navigator>
  )
}


//NEED TO IMPORT THIS TOO
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 80
  }
});
