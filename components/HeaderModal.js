import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SolidIcons } from 'react-native-vector-icons/FontAwesome5';
import { text } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { DEV_MODE } from '../global-variables';


export default function HeaderModal({ }) {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [navigate, onNavigate] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      setModalVisible(!modalVisible)
    }
  }, [navigate]);

  const navigateTo = (nav, name) => {
    nav.navigate(name);
    onNavigate(!navigate);
    setModalVisible(false);
  }

  return (
    <View style={styles.centeredView}>
      <Icon.Button
        name="bars"
        color="white"
        backgroundColor="#28865C"
        onPress={() => setModalVisible(!modalVisible)}
        size={20}
      >
      </Icon.Button>
      {modalVisible ?
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.a}>
              <View style={styles.modalView}>
                <Icon
                  name="times"
                  color="black"
                  backgroundColor="white"
                  style={styles.icon}
                  onPress={() => setModalVisible(!modalVisible)}
                  size={30}
                />
                <View style={styles.modalText}>
                  <TouchableOpacity style={styles.button} onPress={() => navigateTo(navigation, "Search")}><Icon name="search"color="black" size={20} /><Text style={{ fontSize: 18 }}>Search</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigateTo(navigation, "Profile")}><Icon name="user"color="black" size={20} /><Text style={{ fontSize: 18 }}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigateTo(navigation, "Challenges")}><Icon name="map-marker"color="black" size={20} /><Text style={{ fontSize: 18 }}>Challenges</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigateTo(navigation, "Leaderboard")}><Icon name="trophy"color="black" size={20} /><Text style={{ fontSize: 17}}>Leaderboard</Text></TouchableOpacity>
                  {DEV_MODE === true ?  <TouchableOpacity style={styles.button} onPress={() => navigateTo(navigation, "Analytics")}><Icon name="chart-bar"color="black" size={20} /><Text style={{ fontSize: 18 }}>Analytics</Text></TouchableOpacity> : null }
                </View>
              </View>
            </View>
          </View>
        </Modal>
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  a: {
    backgroundColor: '#000000AA',
    flex: 1,
    width: 420,
  },
  modalView: {
    alignSelf: "flex-end",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 35,
    paddingLeft: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "40%",
    width: "50%"
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    paddingLeft: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15

  },
  icon: {
    alignSelf: "flex-end"
  },
  buttom: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
});
