import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { postMethodFetch } from "../functions";
import { rem } from "../global-variables";
import { COLOR_EXTRA_LIGHT_GRAY, SMALL_TEXT_SIZE, button, flexbox, textInputStyle, text } from "./styles";

function FormAttribute({ heading, onChangeText }) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{heading}</Text>
      <TextInput
	placeholder={"\t"+heading}
	onChangeText={(textValue) => { onChangeText(textValue) }}
	style={styles.textInput}
	secureTextEntry
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 1.2 * rem,
  },
  name: {
    ...text,
  },
  textInput: {
    ...textInputStyle,
    paddingLeft: 0.1 * rem
  }
});

export default FormAttribute;
