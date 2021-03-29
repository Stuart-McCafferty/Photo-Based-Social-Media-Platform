import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { text } from "./styles";
import { useNavigation } from '@react-navigation/native';

function HeaderModal() {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [navigate, onNavigate] = useState(false);

  useEffect(() => {
    if(modalVisible){
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
        name="cog"
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
          <View style={styles.modalView}>
              <View style={styles.modalText}>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>Header Modal</Text>
		<View>
		  <TouchableOpacity onPress={() => navigateTo(navigation, "Search")}><Text style={text}>Search</Text></TouchableOpacity>
		  <TouchableOpacity onPress={() => navigateTo(navigation, "Challenges")}><Text style={text}>Challenges</Text></TouchableOpacity>
		  <TouchableOpacity onPress={() => navigateTo(navigation, "Profile")}><Text style={text}>Profile</Text></TouchableOpacity>
		  <TouchableOpacity onPress={() => navigateTo(navigation, "Leaderboard")}><Text style={text}>Leaderboard</Text></TouchableOpacity>
		  <TouchableOpacity onPress={() => navigateTo(navigation, "Challenges")}><Text style={text}>Challenges</Text></TouchableOpacity>
		  <TouchableOpacity onPress={() => navigateTo(navigation, "Registration")}><Text style={text}>Registration</Text></TouchableOpacity>
		</View>
		<Icon.Button
		  name="times"
		  color="grey"
		  backgroundColor="white"
		  onPress={() => setModalVisible(!modalVisible)}
		  size={20}
		/>
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
  modalView: {
    height: '90%',
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default HeaderModal;
