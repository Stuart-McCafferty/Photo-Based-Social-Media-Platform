import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const ExploreStack = createStackNavigator();

//screen imports
import ChallengeScreen from '../screens/ChallengeScreen/ChallengeScreen';
import CameraScreen from '../../STUARTS SCREENS/CameraScreen';
import ExploreScreen from '../../STUARTS SCREENS/ExploreScreen';
import FeedScreen from '../../STUARTS SCREENS/FeedScreen';
import LeaderboardScreen from '../../STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from '../../STUARTS SCREENS/ProfileScreen';
import NotifcationsScreen from '../../STUARTS SCREENS/NotificationScreen';
import LoginScreen from '../../STUARTS SCREENS/LoginScreen';

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
