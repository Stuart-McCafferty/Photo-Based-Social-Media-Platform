import React from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { COLOR_EXTRA_LIGHT_GRAY, EXTRA_SMALL_TEXT_SIZE, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";

function Notification(props) {
  
  if (props.data.type === "new_follower") return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
	<Text style={styles.text}>{props.data.username} is now following you</Text>
      </View>
    </View>
  );
  else if (props.data.type === "challenge_completed") return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
	<Text style={styles.text}>You have completed the challenge {props.data.name}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  text: {
    ...text,
    fontSize: LARGE_TEXT_SIZE
  }
});

export default Notification;
