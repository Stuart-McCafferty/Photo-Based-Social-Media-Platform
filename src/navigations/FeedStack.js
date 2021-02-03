import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const FeedStack = createStackNavigator();


/*
import LeaderboardScreen from './src/screens/LeaderboardScreen/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
*/

//screen imports
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import LeaderboardScreen from '../../STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import NotifcationsScreen from '../../STUARTS SCREENS/NotificationScreen';

//component imports
import ProfileIcon from '../components/ProfileIcon';
import NotificationIcon from '../components/NotificationIcon';

export default function FeedStackNav(){
  return (
    <FeedStack.Navigator
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
      <FeedStack.Screen name="Eden" component={FeedScreen} />
      <FeedStack.Screen name="Leaderboard" component={LeaderboardScreen} />
      <FeedStack.Screen name="Profile" component={ProfileScreen} />
      <FeedStack.Screen name="Notification" component={NotifcationsScreen} />
    </FeedStack.Navigator>
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
