import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavBar from "./NavBar";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { textInputStyle, textSmall, button } from "./styles";

function Settings({ navigation }) {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={appBodyStyle}>


      <ScrollView style={scrollViewStyle}>

	<form action="http://localhost:5000/api_custom/account" method="post" encType="multipart/form-data">

	  <View>
	    <Text style={textSmall}>Username</Text>
	    <input style={textInputStyle} name="username" placeholder="Username" ref={register}/>
	  </View>

	  <View>
	    <Text style={textSmall}>Area</Text>
	    <input style={textInputStyle} name="area" placeholder="area" ref={register}/>
	  </View>

	  <View>
	    <Text style={textSmall}>Country</Text>
	    <input style={textInputStyle} name="country" placeholder="country" ref={register}/>
	  </View>

	  <View>
	    <Text style={textSmall}>Bio</Text>
	    <input style={textInputStyle} name="bio" placeholder="bio" ref={register}/>
	  </View>

	  <View>
	    <input style={textInputStyle} type="submit" value={"Submit Changes"} style={button}/>
	  </View>

	</form>

      </ScrollView>

      <NavBar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default Settings;
