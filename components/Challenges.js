import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GLOBAL from "../GLOBAL";
import ChallengeCard from "./ChallengeCard";
import { postMethodFetch } from "../functions";
import { rem, scrollViewStyle } from "../global-variables";
import { SMALL_TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";

function Challenges({ navigation }) {

  const [challengeIDs,setChallengeIDs] = useState([20,20,20,20,20])
  const [challenges,setChallenges] = useState([]);

  useEffect(() => {
    const submission = {
      username: GLOBAL.USERNAME,
      key: GLOBAL.KEY,
      message: "Yes"
    };
    postMethodFetch(submission, "/api_custom/challenges", res => {
      console.log("Curious");
      setChallenges(res.challenges);
    });
  }, [])

  return (
    <ScrollView style={scrollViewStyle}>
      
      <Text>Challenges</Text>

      {challenges.map(challenge => <ChallengeCard navigation={navigation} data={challenge} />)}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: rem
  }
});

export default Challenges;
