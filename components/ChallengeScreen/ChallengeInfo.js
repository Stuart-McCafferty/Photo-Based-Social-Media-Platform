import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Posts from './Posts';


const ChallengeInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
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
              size={30}
            />
            <View style={styles.challengeTitle}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>Tree Hugger Challenge</Text>
              <Text style={{ fontSize: 24 }}>March 2021</Text>
            </View>
            <Image style={styles.image} source={{ uri: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_LL_trees.png' }}></Image>
            <View>
              <Text style={styles.challengeTask}>Take 5 photos of trees to complete this challenge!</Text>
              <Text style={styles.challengeTask}>Reward: 25 points</Text>
            </View>
            <Button
              title="Open Camera"
              color= "#28865C"
            />
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
      <Posts />
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
