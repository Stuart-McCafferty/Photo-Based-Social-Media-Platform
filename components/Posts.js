import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle, rem } from "../global-variables";
import GLOBAL from "../GLOBAL";
import { text } from "./styles";
import Post from "./Post";
import { postMethodFetch } from "../functions";

function Posts({ navigation, route }) {

  const [items,setItems] = useState([]);
  const [content,setContent] = useState([]);

  useEffect(() => {
    const submission = {
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    }
    postMethodFetch(submission, "/api_custom/activity/"+GLOBAL.USERNAME, res => {
      updateData(res.activity);
    });
  }, []);

  const updateData = (feed) => {
    if (feed.length !== 0) {
      let refArgs = feed.map(item => item.ref).join("+");
      fetch(`${DOMAIN_NAME}/api/photo/${refArgs}?username=${GLOBAL.USERNAME}`)
      .then(res => res.json())
      .then(data => {
	setContent(data.reverse());
      });
    }
  };

  const onSelect = (item) => {
    route.params.onSelect(item.ref);
    navigation.goBack();
  }

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	{content.map((item, index) => (
	  <TouchableOpacity onPress={() => onSelect(item)}>
	    <Post key={index} navigation={navigation} data={item} />
	  </TouchableOpacity>
	))}
      </ScrollView>
    </View>
  );
}

export default Posts;
