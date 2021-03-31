import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CONTAINER_WIDTH, DOMAIN_NAME, rem } from "../../global-variables";
import { EXTRA_SMALL_TEXT_SIZE, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "../styles";
import CHALLENGES from "../../assets/CHALLENGES";

function ChallengeCard({ id }) {

  const [challenge,setChallenge] = useState(CHALLENGES[id])

  return (
    <ImageBackground resizeMode="contain" style={styles.image} source={require(`../../assets/images/challenges/0.jpg`)}>
      <Text style={styles.title}>{challenge.name}</Text>
      <Text style={styles.reward}>Reward: {challenge.reward}</Text>
      <ProgressBar numerator={2} denominator={3} />
    </ImageBackground>
  );

}

function ProgressBar({ numerator, denominator }) {

  return (
    <View>
    </View>
  );

}

const styles = StyleSheet.create({
  image: {
    width:  18 * rem,
    height: 18 * rem * 1080 / 1920,
    marginBottom: rem,
    marginRight: rem
  },
  title: {
    fontSize: LARGE_TEXT_SIZE,
    color: "white",
    padding: 10
  },
  description: {
    fontSize: SMALL_TEXT_SIZE,
    color: "white"
  },
  reward: {
    fontSize: SMALL_TEXT_SIZE,
    marginTop: 0.5 * rem,
    color: "white",
    padding: 10
  }
})

export default ChallengeCard;
