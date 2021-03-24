import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle, rem } from "../global-variables";
import NavBar from "./NavBar";
import Post from "./Post";

function Feed({ navigation }) {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch(`${DOMAIN_NAME}/api/leaderboard/global`)
      .then(res => res.json())
      .then(data => {
	setData(data);
	console.log(data);
      });
  }, []);

  const posts = [
    { ref: "24701358208326510000" },
    { ref: "70558729363141310000" },
    { ref: "24701358208326510000" },
    { ref: "70558729363141310000" }
  ];

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<FlatList
	  data={posts}
	  renderItem={({item, index}) => (<Post data={item} />)}
	/>
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
});

export default Feed;
