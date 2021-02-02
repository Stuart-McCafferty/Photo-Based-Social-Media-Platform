import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Search from './src/components/Search';
import AppHeader from './src/components/AppHeader';
import ProfileScreen from './src/screens/ProfileScreen';


export default function App() {

  return (
    <>
        <StatusBar barStyle="light-content" />
        <Search></Search>
        <ProfileScreen></ProfileScreen>
    </>

  );
}



