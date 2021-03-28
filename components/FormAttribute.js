import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { postMethodFetch } from "../functions";
import { rem } from "../global-variables";
import { COLOR_EXTRA_LIGHT_GRAY, SMALL_TEXT_SIZE, button, flexbox, textInputStyle, textSmall } from "./styles";

function FormAttribute({ heading, onChangeText }) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{heading}</Text>
      <TextInput
	placeholder={heading}
	onChangeText={(textValue) => { onChangeText(textValue) }}
	style={styles.textInput}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    ...flexbox,
    marginBottom: 0.6 * rem
  },
  name: {
    ...textSmall,
    flex: 2
  },
  textInput: {
    ...textInputStyle,
    flex: 6
  }
});

export default FormAttribute;
