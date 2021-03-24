import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { containerStyle, rem } from "../global-variables";
import { COLOR_LIGHT_GRAY } from "./styles";

function NavBar({ navigation }) {

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}><Text style={styles.text}>Feed</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Leaderboard")}><Text style={styles.text}>Camera</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}><Text style={styles.text}>Explore</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}><Text style={styles.text}>Settings</Text></TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  containerStyle: {
    height: 4 * rem,
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: COLOR_LIGHT_GRAY,
    borderTopWidth: 2
  },
  button: {
    flex: 1
  },
  text: {
    fontSize: 1 * rem,
    textAlign: "center"
  }
});

export default NavBar;
