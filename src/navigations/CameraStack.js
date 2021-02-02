import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigation
const CameraStack = createStackNavigator();

//screen imports
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import UploadScreen from '../screens/CameraScreen/UploadScreen';

export default function CameraStackNav(){
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen name="Camera" component={CameraScreen} />
      <CameraStack.Screen name="Upload" component={UploadScreen} />
    </CameraStack.Navigator>
  )
}
