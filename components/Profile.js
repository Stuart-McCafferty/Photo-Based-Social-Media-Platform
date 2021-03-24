import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Post from "./Post";
import NavBar from "./NavBar";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { SMALL_TEXT_SIZE, button, flexbox, text, textLarge, textSmall } from "./styles";

function Profile({ navigation }) {

  const data = { username: "Jack" };

  const posts = [
    { ref: "24701358208326510000" },
    { ref: "70558729363141310000" },
    { ref: "24701358208326510000" },
    { ref: "70558729363141310000" }
  ];

  return (
    <View style={appBodyStyle}>

      <ScrollView style={scrollViewStyle}>

	<View style={styles.profileHeader}>
	  <Image style={styles.mainProfilePicture} source={{ uri: `https://photography-app-content.s3.amazonaws.com/profile_pictures/Hannah` }} />
	  <Text style={text}>Hannah</Text>
	  <Text style={textSmall}>Aberdeen, United Kingdom</Text>
	  <Text style={textLarge}>7421</Text>
	  <Text style={styles.caption}>Zoology student at UofA. Join me as I document nature.</Text>
	</View>

	<View style={flexbox}>
	  <Text style={styles.text}>132 followers</Text>
	  <Text style={styles.text}>243 following</Text>
	  <TouchableOpacity style={button}><Text style={styles.text}>Follow</Text></TouchableOpacity>
	</View>

	<FlatList
	  data={posts}
	  renderItem={({item, index}) => (<Post data={item} />)}
	/>

      </ScrollView>

      <NavBar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainProfilePicture: {
    width: 5 * rem,
    height: 5 * rem,
    borderRadius: 2.5 * rem
  },
  profileHeader: {
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: SMALL_TEXT_SIZE
  },
  caption: {
    fontSize: 0.8 * rem,
    marginTop: 0.5 * rem,
    marginBottom: 0.8 * rem,
    textAlign: "center"
  }
});

export default Profile;
