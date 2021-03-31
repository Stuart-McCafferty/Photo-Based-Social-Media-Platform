import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Posts from "../Posts";
import { rem } from "../../global-variables";
import { COLOR_PRIMARY_COMPLEMENT, TEXT_SIZE, flexbox } from "../styles";
import CHALLENGES from "../../assets/CHALLENGES";

function Task({ navigation, onPress, challengeID, taskIndex }) {

  const selectPost = (ref) => {
    Alert.alert(
      "You have selected submitted a challenge",
      "",
      [
	{
	  text: "Cool!"
	}
      ]
    );
  };

  const selectTask = () => {
    onPress();
    navigation.navigate("Posts", { onSelect: selectPost });
  }

  return (
    <TouchableOpacity onPress={selectTask} style={styles.container}>
      <Text style={styles.task}>{CHALLENGES[challengeID].tasks[taskIndex].desc}</Text>
    </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
  container: {
    ...flexbox,
    backgroundColor: COLOR_PRIMARY_COMPLEMENT,
    width: "100%",
    padding: rem,
    marginBottom: 0.6 * rem,
    borderRadius: rem
  },
  task: {
    fontSize: TEXT_SIZE
  }
});

export default Task;
