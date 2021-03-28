import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eden App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: 40,
    position: "absolute",
    top: 0
  },
  text: {
    fontSize: 30
  }
});

export default Header;
