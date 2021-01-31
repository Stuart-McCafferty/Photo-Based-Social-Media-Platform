import * as React from 'react';
import { Button, Text, Image, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



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
  const navigation = useNavigation();
  return(
  <Icon.Button
    name="user"
    color="black"
    backgroundColor="white"
    onPress={() => navigation.navigate('Profile')}
    size="20"
  >
  </Icon.Button>
  )
}

function NotificationIcon(){
  const navigation = useNavigation();
  return(
    <Icon.Button
      name="bell"
      color="black"
      backgroundColor="white"
      onPress={() => navigation.navigate("Notification")}
      size="20"
    >
    </Icon.Button>
  )
}


const Navigation = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'red',
      }}
    >
      <Tab.Screen
        name="Feed"
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      >
        {() => (
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
            <FeedStack.Screen name="Feed" component={FeedScreen} />
            <FeedStack.Screen name="Leaderboard" component={LeaderboardScreen} />
            <FeedStack.Screen name="Profile" component={ProfileScreen} />
            <FeedStack.Screen name="Notification" component={NotifcationsScreen} />
          </FeedStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Camera"
          options={{
            tabBarLabel: 'camera',
            tabBarIcon: ({ color, size }) => (
              <Icon name="camera" color={color} size={size} />
            ),
          }}
        >
        {() => (
          <CameraStack.Navigator>
            <CameraStack.Screen name="Camera" component={CameraScreen} />
          </CameraStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Explore"
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <Icon name="globe" color={color} size={size} />
            ),
          }}
        >
        {() => (
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
        )}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

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

export default Navigation;
