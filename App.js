import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import GLOBAL from "./GLOBAL";
import { DEV_MODE } from "./global-variables";
import { Text, View } from 'react-native';
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import MasterStack from "./stacks/MasterStack";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { signedIn: true };
    this.onSignIn.bind(this);
    this.signedIn = true;
    this.register = false;
  }

  onSignIn(key, username) {
    GLOBAL.KEY = key;
    GLOBAL.USERNAME = username;
    this.signedIn = true;
    this.register = false;
    this.forceUpdate();
  }

  isAtRegistration(bool) {
    this.register = bool;
    this.forceUpdate();
  }

  render() {
    return this.signedIn ?
      <MasterStack />
    : (this.register ?
      <Registration isAtRegistration={this.isAtRegistration.bind(this)} />
    : <SignIn onSignIn={this.onSignIn.bind(this)} isAtRegistration={this.isAtRegistration.bind(this)} />);
  }
}

registerRootComponent(App);

export default App;
