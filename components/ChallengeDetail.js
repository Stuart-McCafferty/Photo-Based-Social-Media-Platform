import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

function ChallengeDetail() {
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
              <View style={styles.modalText}>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>Tree Hugger Challenge</Text>
                <Text style={{fontSize: 24}}>March 2021</Text>
              </View>
              <View style={styles.completeBadgeSection}>
                <View style={styles.completeBadge}>
                  <View style={styles.badge}></View>
                </View>
                <View style={styles.earnBadge}>
                  <Text style={{ fontSize: 16, textAlign: "center", textJustify: "inter-word"}}>
                    Take photos of trees to get that Tree Hugger badge!
                  </Text>
                </View>
              </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
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
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center"
  },
  completeBadgeSection: {
    flexDirection: 'row',
    margin: 10,
    width: '100%',

  },
  completeBadge: {
    width: '50%'
  },  
  earnBadge: {
    width: '50%',
  },
  badge: {
    backgroundColor: "black",
    borderRadius: 360
  },
});

export default ChallengeDetail;