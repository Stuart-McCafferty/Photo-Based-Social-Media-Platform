import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import { rem } from "../global-variables";
import { SMALL_TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";
import GLOBAL from "../GLOBAL";



//

export default function AnalyticScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.mainProfilePicture} source={{ uri: `https://photography-app-content.s3.amazonaws.com/profile_pictures/${GLOBAL.USERNAME}` }} />
    </View>
  );
}


const styles = StyleSheet.create({
  mainProfilePicture: {
    width: 5 * rem,
    height: 5 * rem,
    borderRadius: 2.5 * rem
  },
  profileHeader: {
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: SMALL_TEXT_SIZE
  },
  caption: {
    fontSize: 0.8 * rem,
    marginTop: 0.5 * rem,
    marginBottom: 0.8 * rem,
    textAlign: "center"
  }
});
