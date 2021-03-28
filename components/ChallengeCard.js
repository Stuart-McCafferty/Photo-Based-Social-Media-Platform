import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { EXTRA_SMALL_TEXT_SIZE, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";

function ChallengeCard({ username }) {

  const [data,setData] = useState({ name: "My Lady", description: "Find a ladybug", reward: 20 });

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
      <ImageBackground style={styles.image} source={{ uri: "https://photography-app-content.s3.amazonaws.com/challenges/1.jpg" }}>
	<Text style={styles.title}>{data.name}</Text>
	<Text style={styles.description}>{data.description}</Text>
	<Text style={styles.reward}>Reward: {data.reward}</Text>
      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginRight: 0.5 * rem
  },
  image: {
    width: 12 * rem,
    height: 6.75 * rem
  },
  title: {
    fontSize: TEXT_SIZE,
    color: "white"
  },
  description: {
    fontSize: SMALL_TEXT_SIZE,
    color: "white"
  },
  reward: {
    fontSize: SMALL_TEXT_SIZE,
    color: "white"
  }
})

export default ChallengeCard;
