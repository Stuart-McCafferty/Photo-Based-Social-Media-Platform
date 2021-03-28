import React, { useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChallengeCard from "./ChallengeCard";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { SMALL_TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";

function Challenges({ navigation }) {

  const [rows,setRows] = useState([[0,0,0,0,0], [0,0,0], [0,0], [0,0,0,0]])

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>

	{rows.map(row => (
	  <>
	    <Text style={text}>Bugs</Text>
	    <FlatList
	      data={row}
	      renderItem={({item}) => <ChallengeCard id={0} />}
	      horizontal={true}
	      style={styles.row}
	    />
	  </>
	))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: rem
  }
});

export default Challenges;
