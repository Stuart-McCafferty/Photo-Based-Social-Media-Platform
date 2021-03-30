import React, { useState } from 'react';
import { Button, CheckBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormAttribute from "./FormAttribute";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { COLOR_ERROR, COLOR_PURPLE, LARGE_TEXT_SIZE, buttonStyle, errorStyle, flexbox, logoStyle } from "./styles";

function Registration({ navigation, isAtRegistration }) {

  const [email,setEmailInput] = useState("");
  const [username,setUsernameInput] = useState("");
  const [password1,setPassword1Input] = useState("");
  const [password2,setPassword2Input] = useState("");
  const [checkbox,setCheckbox] = useState(false);
  const [emailError,setEmailError] = useState("");
  const [usernameError,setUsernameError] = useState("");
  const [passwordError,setPasswordError] = useState("");

  const submit = () => {
    const submission = { email, username, password1, password2, checkbox }
    postMethodFetch(submission, "/post/register", (res) => {
      console.log("register response");
      console.log(res);
      if (res.valid) {
	isAtRegistration(false);
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
	<View style={flexbox}>
	  <CheckBox
	    value={checkbox}
	    onValueChange={setCheckbox}
	    style={styles.checkbox}
	  />
	  <Text style={styles.agreement}>I have read and agree to the Terms of Service and Privacy Policy</Text>
	</View>
	<TouchableOpacity
	  style={styles.register}
	  onPress={() => submit()}
	>
	  <Text style={styles.registerText}>Create account</Text>
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
  registerText: {
    ...buttonStyle,
    fontSize: LARGE_TEXT_SIZE
  },
  signInText: {
    ...buttonStyle,
    backgroundColor: COLOR_PURPLE,
    fontSize: LARGE_TEXT_SIZE
  },
  tos: {

  }
});

export default Registration;
