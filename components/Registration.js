import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import FormAttribute from "./FormAttribute";
import { appBodyStyle, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { buttonStyle, logoStyle } from "./styles";

function Registration({ navigation }) {

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
	<Text>{usernameError}</Text>
	<FormAttribute heading="Username" onChangeText={ setUsernameInput } />
	<Text>{emailError}</Text>
	<FormAttribute heading="Email" onChangeText={ setEmailInput } />
	<Text>{passwordError}</Text>
	<FormAttribute heading="Password" onChangeText={ setPassword1Input } />
	<FormAttribute heading="Confirm Password" onChangeText={ setPassword2Input } />
	<Button title="Create Account" style={buttonStyle} onPress={() => submit()}/>
      </ScrollView>
    </View>
  );

}

export default Registration;
