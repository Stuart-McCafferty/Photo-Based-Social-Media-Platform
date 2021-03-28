import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle, rem } from "../global-variables";
import GLOBAL from "../GLOBAL";
import Notification from "./Notification";
import Post from "./Post";
import { postMethodFetch } from "../functions";

function Notifications({ navigation }) {

  const [data,setData] = useState([]);

  useEffect(() => {
    const submission = {
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    }
    postMethodFetch(submission, "/api_custom/notifications", res => {
      setData(res.unseen)
    });
  }, []);

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	{data.map(item => <Notification data={item} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default Notifications;
