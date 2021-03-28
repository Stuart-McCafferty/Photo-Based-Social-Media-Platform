import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Blank from "../components/Blank";

const Stack = createStackNavigator();

class CameraStack extends React.Component {
  render() {
    return (
      <Stack.Navigator>
	<Stack.Screen
	  name="Home"
	  component={Blank}
	  options={{ title: "Camera" }}
	/>
      </Stack.Navigator>
    );
  }
}

export default CameraStack;
