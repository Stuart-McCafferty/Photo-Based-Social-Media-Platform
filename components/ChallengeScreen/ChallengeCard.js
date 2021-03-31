import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CONTAINER_WIDTH, DOMAIN_NAME, rem } from "../../global-variables";
import { EXTRA_SMALL_TEXT_SIZE, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "../styles";
import CHALLENGES from "../../assets/CHALLENGES";

function ChallengeCard({ navigation, id }) {

  const [challenge,setChallenge] = useState(CHALLENGES[id])

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ChallengePage", { soo: "Jack" })}>
      <ImageBackground resizeMode="contain" style={styles.image} source={require(`../../assets/images/challenges/0.jpg`)}>
	<Text style={styles.title}>{challenge.name}</Text>
	<Text style={styles.reward}>Reward: {challenge.reward}</Text>
	<ProgressBar numerator={2} denominator={3} />
      </ImageBackground>
    </TouchableOpacity>
  );

}

function ProgressBar({ numerator, denominator }) {

  return (
    <View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginRight: rem
  },
  image: {
    width:  18 * rem,
    height: 18 * rem * 1080 / 1920,
    marginBottom: rem
  },
  title: {
    fontSize: LARGE_TEXT_SIZE,
    color: "white"
  },
  description: {
    fontSize: SMALL_TEXT_SIZE,
    color: "white"
  },
  reward: {
    fontSize: SMALL_TEXT_SIZE,
    marginTop: 0.5 * rem,
    color: "white"
  }
})

export default ChallengeCard;
