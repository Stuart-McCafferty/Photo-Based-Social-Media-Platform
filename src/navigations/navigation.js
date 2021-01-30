import * as React from 'react';
import { Button, Text, Image, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';



//creates navigation
const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const CameraStack = createStackNavigator();
const ExploreStack = createStackNavigator();

//screen imports here
/*
import CameraScreen from './src/screens/CameraScreen/CameraScreen';
import ExploreScreen from './src/screens/ExploreScreen/ExploreScreen';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
*/

//TESTING - COMMENT THESE OUT
import CameraScreen from '../../STUARTS SCREENS/CameraScreen';
import ExploreScreen from '../../STUARTS SCREENS/ExploreScreen';
import FeedScreen from '../../STUARTS SCREENS/FeedScreen';
import LeaderboardScreen from '../../STUARTS SCREENS/LeaderboardScreen';
import ProfileScreen from '../../STUARTS SCREENS/ProfileScreen';
import NotifcationsScreen from '../../STUARTS SCREENS/NotificationScreen';
import ChallengeScreen from '../../STUARTS SCREENS/ChallengeScreen';


function ProfileIcon(){
  return(
  <Icon.Button
    name="user"
    color="black"
    backgroundColor="white"
    onPress={() => navigation.navigate('Profile')}
  >
  </Icon.Button>
  )
}

function NotificationIcon(){
  return(
    <Icon.Button
      name="bell"
      color="black"
      backgroundColor="white"
      onPress={() => navigation.navigate("Notification")}
    >
    </Icon.Button>
  )
}


const Navigation = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Feed">
        {() => (
          <FeedStack.Navigator
            screenOptions={{
              headerRight: () => (
                <>
                <ProfileIcon />
                <NotificationIcon />
                </>
              ),
            }}
          >
            <FeedStack.Screen name="Feed" component={FeedScreen} />
            <FeedStack.Screen name="Leaderboard" component={LeaderboardScreen} />
            <FeedStack.Screen name="Profile" component={ProfileScreen} />
            <FeedStack.Screen name="Notification" component={NotifcationsScreen} />
          </FeedStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen name="Camera">
        {() => (
          <CameraStack.Navigator>
            <CameraStack.Screen name="Camera" component={CameraScreen} />
          </CameraStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Explore">
        {() => (
          <ExploreStack.Navigator>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} />
            <ExploreStack.Screen name="Profile" component={ProfileScreen} />
            <ExploreStack.Screen name="Notification" component={NotifcationsScreen} />
            <ExploreStack.Screen name="Challenge" component={ChallengeScreen} />
            <ExploreStack.Screen name="Leaderboard" component={LeaderboardScreen} />
          </ExploreStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);
}

export default Navigation;
