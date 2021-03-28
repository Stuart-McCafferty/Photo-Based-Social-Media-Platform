import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import FormAttribute from "./FormAttribute";
import { appBodyStyle, scrollViewStyle } from "../global-variables";
import GLOBAL from "../GLOBAL";
import { postMethodFetch } from "../functions";
import { buttonStyle, logoStyle } from "./styles";

function SignIn({ navigation, onSignIn }) {

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
      <ScrollView style={scrollViewStyle}>
	<Text style={logoStyle}>eden</Text>
	<Text>{error}</Text>
	<FormAttribute heading="Email" onChangeText={ setEmailInput } />
	<FormAttribute heading="Password" onChangeText={ setPasswordInput } />
	<Button title="Sign In" style={buttonStyle} onPress={() => submit()}/>
      </ScrollView>
    </View>
  );

}

export default SignIn;
