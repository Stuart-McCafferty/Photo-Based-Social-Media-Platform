import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormAttribute from "./FormAttribute";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { COLOR_ERROR, COLOR_PURPLE, buttonStyle, errorStyle, logoStyle } from "./styles";

function Registration({ navigation, isAtRegistration }) {

  const [email,setEmailInput] = useState("");
  const [username,setUsernameInput] = useState("");
  const [password1,setPassword1Input] = useState("");
  const [password2,setPassword2Input] = useState("");
  const [emailError,setEmailError] = useState("");
  const [usernameError,setUsernameError] = useState("");
  const [passwordError,setPasswordError] = useState("");

  const submit = () => {
    const submission = { email, username, password1, password2 }
    postMethodFetch(submission, "/post/register", (res) => {
      if (res.valid) {

      }
      else {
	setEmailError(res.messages["email"]);
	setUsernameError(res.messages["username"]);
	setPasswordError(res.messages["password"]);
      }
    });
  };

  return (
    <View style={appBodyStyle}>
      <Text style={logoStyle}>eden</Text>
      <ScrollView style={scrollViewStyle}>
	{usernameError ? (<Text style={errorStyle}>{usernameError}</Text>) : null}
	<FormAttribute heading="Username" onChangeText={ setUsernameInput } />
	{emailError ? (<Text style={errorStyle}>{emailError}</Text>) : null}
	<FormAttribute heading="Email" onChangeText={ setEmailInput } />
	{passwordError ? (<Text style={errorStyle}>{passwordError}</Text>) : null }
	<FormAttribute secureTextEntry={true} heading="Password" onChangeText={ setPassword1Input } />
	<FormAttribute secureTextEntry={true} heading="Confirm Password" onChangeText={ setPassword2Input } />
	<TouchableOpacity
	  style={styles.register}
	  onPress={() => submit()}
	>
	  <Text style={buttonStyle}>Create account</Text>
	</TouchableOpacity>
	<TouchableOpacity
	  style={styles.register}
	  onPress={() => isAtRegistration(false)}
	>
	  <Text style={styles.signInText}>Already have an account? Sign in</Text>
	</TouchableOpacity>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: rem
  },
  register: {
    marginTop: 1.2 * rem
  },
  signIn: {
    marginTop: 1.2 * rem
  },
  signInText: {
    ...buttonStyle,
    backgroundColor: COLOR_PURPLE
  }
});

export default Registration;
