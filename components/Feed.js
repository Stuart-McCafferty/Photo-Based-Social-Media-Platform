import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle, rem } from "../global-variables";
import GLOBAL from "../GLOBAL";
import { text } from "./styles";
import Post from "./Post";
import { postMethodFetch } from "../functions";

function Feed({ navigation }) {

  const [items,setItems] = useState([]);
  const [content,setContent] = useState([]);

  useEffect(() => {
    const submission = {
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    }
    postMethodFetch(submission, "/api_custom/feed", res => {
      updateData(res.feed);
    });
  }, []);

  const updateData = (feed) => {
    if (feed.length !== 0) {
      let refArgs = feed.map(item => item.ref).join("+");
      fetch(`${DOMAIN_NAME}/api/photo/${refArgs}`)
      .then(res => res.json())
      .then(data => {
	console.log("CONETNTNTNT");
	console.log(data);
	setContent(data);
      });
    }
  };

  return (
    <View style={appBodyStyle}>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}><Text style={text}>Search</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Challenges")}><Text style={text}>Challenges</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}><Text style={text}>Profile</Text></TouchableOpacity>
      <ScrollView style={scrollViewStyle}>
	{content.map(item => <Post navigation={navigation} data={item} />)}
      </ScrollView>
    </View>
  );
}

export default Feed;
