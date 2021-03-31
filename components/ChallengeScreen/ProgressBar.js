import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { rem } from "../../global-variables";

function ProgressBar({ numerator, denominator }) {

  return (
    <View style={styles.container}>
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    width: 12 * rem,
    height: rem
  }
});

export default ProgressBar;
