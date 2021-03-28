import * as React from 'react';
import { Button, Text, Image, View, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


//component imports
import ProfileIcon from '../components/ProfileIcon';
import NotificationIcon from '../components/NotificationIcon';

//navigation imports
import FeedStackNav from './FeedStack';
import CameraStackNav from './CameraStack';
import ExploreStackNav from './ExploreStack';
import MainTab from './MainTab';
import WelcomeStackNav from './WelcomeStack';

//create navigation
const RootStack = createStackNavigator();


const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}} >
        <RootStack.Screen name="WelcomeStackNav" component={WelcomeStackNav} />
        <RootStack.Screen name="MainTab" component={MainTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;
