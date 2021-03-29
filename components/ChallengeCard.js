import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { CONTAINER_WIDTH, DOMAIN_NAME, rem } from "../global-variables";
import { EXTRA_SMALL_TEXT_SIZE, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";
import ProgressBar, { ZeroProgress, ThirtyThreeProgress, SixtySixProgress, OneHundredProgress} from './ProgressBar';
function ChallengeCard({ navigation, data }) {

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChallengePage", { soo: "Jack" })}>
      <ImageBackground resizeMode="contain" style={styles.image} source={require(`../assets/images/challenges/3.jpg`)}>
      	<Text style={styles.title}>{data.name}</Text>
      	<Text style={styles.description}>{data.description}</Text>
      	<Text style={styles.reward}>Reward: {data.reward}</Text>
        <ProgressBar />
      </ImageBackground>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  image: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH * 1080 / 1920,
    marginBottom: rem
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
