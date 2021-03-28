import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Blank from "../components/Blank";
import CameraScreen from '../components/CameraScreen.js';
import UploadScreen from '../components/UploadScreen.js';

const Stack = createStackNavigator();

class CameraStack extends React.Component {
  render() {
    return (
      <Stack.Navigator>
	<Stack.Screen
	  name="Camera"
	  component={CameraScreen}
	  options={{ title: "Camera" }}
	/>
  <Stack.Screen
	  name="Upload"
	  component={UploadScreen}
	  options={{ title: "Upload" }}
	/>
      </Stack.Navigator>
    );
  }
}

export default CameraStack;
