import * as React from 'react';
import Posts from "./Posts"
import ChallengeInfo from "./ChallengeInfo"
import { StyleSheet, Text, View, Button, flatList, Image, PullView, ScrollView, Modal } from 'react-native';

export default function ChallengeScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.Header}>
          <Text style={styles.BoldText}>Challenges</Text>
          <ChallengeInfo></ChallengeInfo>
          <View >
            <Text style={styles.ChallengeName}>Started</Text>
          </View>
          <View style={styles.PhotoGridRow1}>
            <Posts></Posts>
          </View>
          <View>
            <Text style={styles.ChallengeName}>Challenges near you</Text>
          </View>
          <View style={styles.PhotoGridRow1}>
            <Posts></Posts>
          </View>
          <View>
            <Text style={styles.ChallengeName}>Challenges in Scotland</Text>
          </View>
          <View style={styles.PhotoGridRow1}>
            <Posts></Posts>
          </View>
        </View>
      </ScrollView>
    </View>
  );

}


const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 10

  },

  ChallengeName: {
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',

  },



  BoldText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 30
  },

  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },


  PhotoGridRow1: {

    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',

  },



});
