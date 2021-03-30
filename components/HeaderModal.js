import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { text } from "./styles";
import { useNavigation } from '@react-navigation/native';
import {DEV_MODE} from '../global-variables';


export default function HeaderModal({ }) {

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
		  color="grey"
		  backgroundColor="white"
      style={styles.icon}
		  onPress={() => setModalVisible(!modalVisible)}
		  size={30}
		/>
              <View style={styles.modalText}>
                <Text style={{fontSize: 40, fontWeight: "bold"}}>Header Modal</Text>
		<View>
		  <TouchableOpacity style={styles.buttom} onPress={() => navigateTo(navigation, "Search")}><Text style={{fontSize:30}}>Search</Text></TouchableOpacity>
		  <TouchableOpacity style={styles.buttom} onPress={() => navigateTo(navigation, "Challenges")}><Text style={{fontSize:30}}>Challenges</Text></TouchableOpacity>
		  <TouchableOpacity style={styles.buttom} onPress={() => navigateTo(navigation, "Profile")}><Text style={{fontSize:30}}>Profile</Text></TouchableOpacity>
		  <TouchableOpacity style={styles.buttom} onPress={() => navigateTo(navigation, "Leaderboard")}><Text style={{fontSize:30}}>Leaderboard</Text></TouchableOpacity>
      { DEV_MODE === true ?   <TouchableOpacity style={styles.buttom} onPress={() => navigateTo(navigation, "Analytics")}><Text style={{fontSize:30}}>Analytics</Text></TouchableOpacity> : null }
		</View>

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
  a:{
    backgroundColor: '#000000AA',
    flex : 1,
    width:420,
  },
  modalView: {
    backgroundColor: "#C1E4D5",
    borderRadius: 20,
    padding: 35,
    paddingLeft:0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:"100%",
    marginLeft:170,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  icon:{
    alignSelf: "flex-end"
  },
  buttom: {
    padding:10,
    borderBottomWidth:0.5,
    borderBottomColor:"black",
  },
});
