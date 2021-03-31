/*
**  Courtesy of https://reactnative.dev/docs/modal
*/

import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Button } from "react-native";
import { rem } from "../../global-variables";
import { textLarge } from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import ChallengeCard from "./ChallengeCard";
import Task from "./Task";
import CHALLENGES from "../../assets/CHALLENGES";

function ChallengeInfo({ navigation, id }) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name="times"
              color="grey"
              backgroundColor="white"
              style={styles.icon}
              onPress={() => setModalVisible(!modalVisible)}
              size={1.5 * rem}
            />
	    <Text style={textLarge}>{CHALLENGES[id].name}</Text>
	    {CHALLENGES[id].tasks.map((item,index) => (
	      <Task
		onPress={() => setModalVisible(false)}
		navigation={navigation}
		challengeID={id}
		taskIndex={index}
	      />
	    ))}
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
	<ChallengeCard navigation={navigation} id={id} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: '85%',
    width: '90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  challengeTitle: {
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20
  },
  icon: {
    alignSelf: "flex-end"
  },
  challengeTask: {
    fontSize: 18,
    padding: 10
  }
});

export default ChallengeInfo;
