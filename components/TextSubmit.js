import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { rem } from "../global-variables";
import { TEXT_SIZE, buttonStyle, flexbox, textInputStyle, textSmall } from "./styles";

function TextSubmit({ placeholder, buttonText, onChangeText, onSubmit }) {

  return (
    <View style={flexbox}>
      <TextInput
	placeholder={placeholder}
	onChangeText={onChangeText}
	style={styles.input}
      />
      <TouchableOpacity	onPress={() => onSubmit()} >
	<Text style={buttonStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    flex: 1
  }
});

export default TextSubmit;
