import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//creates navigation
const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const CameraStack = createStackNavigator();
const ExploreStack = createStackNavigator();


const Navigation = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Feed">
        {() => (
          <FeedStack.Navigator>
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
