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
      fetch(`${DOMAIN_NAME}/api/photo/${refArgs}?username=${GLOBAL.USERNAME}`)
      .then(res => res.json())
      .then(data => {
	setContent(data.reverse());
      });
    }
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	{content.map((item, index) => <Post key={index} navigation={navigation} data={item} />)}
      </ScrollView>
    </View>
  );
}

export default Feed;
