import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
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
                <Text style={{fontSize: 24}}>Test test test </Text>
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
      </Modal>
      <Icon.Button
        name="cog"
        color="white"
        backgroundColor="#28865C"
        onPress={() => setModalVisible(true)}
        size={20}
      >
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
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
