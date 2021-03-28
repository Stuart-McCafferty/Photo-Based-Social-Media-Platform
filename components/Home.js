import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle, rem } from "../global-variables";
import GLOBAL from "../GLOBAL";
import Feed from "./Feed";
import SignIn from "./SignIn";
import { postMethodFetch } from "../functions";

function Home({ navigation }) {

  const [username,setUsername] = useState(GLOBAL.USERNAME);
  
  const onSignIn = () => {
    GLOBAL.KEY = key;
    GLOBAL.USERNAME = username;
  };

  // TODO
  if (username) return (
    <Feed navigation={navigation} onSignIn={onSignIn} />
  );
  else return (
    <SignIn navigation={navigation} />
  );
}

const styles = StyleSheet.create({
});

export default Home;
