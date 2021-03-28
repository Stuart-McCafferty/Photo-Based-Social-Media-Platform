import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { EXTRA_SMALL_TEXT_SIZE, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";

function ProfileCard({ username, navigation }) {

  const [data,setData] = useState({});
  const [comments,setComments] = useState([]);

  useEffect(() => {
    fetch(`${DOMAIN_NAME}/api/user/${username}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
    .catch(() => console.log("NETWORK ERROR"));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} source={{ uri: "https://photography-app-content.s3.amazonaws.com/profile_pictures/"+username }} />
      <View style={styles.profileInfo}>
	<TouchableOpacity onPress={() => navigation.navigate("Profile", { username: data.username })}><Text style={{ fontSize: TEXT_SIZE }}>{data.username}</Text></TouchableOpacity>
	<Text style={{ fontSize: SMALL_TEXT_SIZE }}>{data.area}, {data.country}</Text>
	<Text style={{ fontSize: LARGE_TEXT_SIZE }}>{data.points}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    ...flexbox,
    marginTop: 0.8 * rem,
    marginBottom: 0.8 * rem
  },
  profilePicture: {
    width: 4 * rem,
    height: 4 * rem,
    borderRadius: 2 * rem
  },
  profileInfo: {
    flex: 1,
    marginLeft: 0.5 * rem
  }
})

export default ProfileCard;
