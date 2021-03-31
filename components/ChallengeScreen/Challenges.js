import React, { useState } from "react";
import Posts from "./Posts"
import ChallengeInfo from "./ChallengeInfo"
import ChallengeCard from "./ChallengeCard";
import { StyleSheet, Text, View, Button, FlatList, Image, PullView, ScrollView, Modal } from 'react-native';
import { scrollViewStyle } from "../../global-variables";

export default function ChallengeScreen({ navigation }) {

  const [row1,setRow1] = useState([0,1,2,3]);

  return (
    <ScrollView style={scrollViewStyle}>
      <View style={styles.Header}>
	<ChallengeInfo></ChallengeInfo>
	<View>
	  <Text style={styles.ChallengeName}>Started</Text>
	</View>
	<View style={styles.PhotoGridRow1}>
	  <FlatList
	    data={row1}
	    renderItem={({item}) => <ChallengeCard navigation={navigation} id={item} />}
	    horizontal
	  />
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
