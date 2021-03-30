import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormAttribute from "./FormAttribute";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import GLOBAL from "../GLOBAL";
import { postMethodFetch } from "../functions";
import { COLOR_PURPLE, buttonStyle, errorStyle, logoStyle } from "./styles";

function SignIn({ navigation, onSignIn, isAtRegistration }) {

  const [email,setEmailInput] = useState("");
  const [password,setPasswordInput] = useState("");
  const [error,setError] = useState("");

  const submit = () => {
    const submission = { email, password }
    postMethodFetch(submission, "/post/sign-in", res => {
      if (res.valid) {
	onSignIn(res.key, res.username);
      }
      else {
	setError(res.message);
      }
    });
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={styles.container}>

	<Text style={logoStyle}>eden</Text>
	{error ? (<Text style={errorStyle}>{error}</Text>) : null}
	<FormAttribute heading="Email" onChangeText={ setEmailInput } />
	<FormAttribute secureTextEntry={true} heading="Password" onChangeText={ setPasswordInput } />

	<TouchableOpacity
	  style={styles.button}
	  onPress={() => submit()}
	>
	  <Text style={buttonStyle}>Sign In</Text>
	</TouchableOpacity>

	<TouchableOpacity
	  style={styles.button}
	  onPress={() => isAtRegistration(true)}
	>
	  <Text style={styles.registerText}>Don't have an account? Register</Text>
	</TouchableOpacity>

      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: rem
  },
  button: {
    marginTop: 1.2 * rem
  },
  registerText: {
    ...buttonStyle,
    backgroundColor: COLOR_PURPLE
  }
})

export default SignIn;
