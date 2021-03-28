import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { DOMAIN_NAME } from "../global-variables";

function Leaderboard({ navigation }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${DOMAIN_NAME}/api/leaderboard/global`)
      .then(res => res.json())
      .then(data => {
	setData(data);
      })
      .catch(() => console.log("NETWORK ERROR"));
  }, []);

  return (
    <View style={appBodyStyle}>
      <LeaderboardItem position="" data={{ position: "", username: "Username", points: "Points" }} />
      <FlatList
	data={data}
	renderItem={({item, index}) => (
	    <LeaderboardItem position={index + 1} data={item}/>
	)}
      />
    </View>
  );
}

function LeaderboardItem(props) {

  return (
    <View style={styles.leaderboardItem}>
      <Text style={styles.position}>{props.position}</Text>
      <Text style={styles.username}>{props.data.username}</Text>
      <Text style={styles.points}>{props.data.points}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  leaderboardItem: {
    display: "flex",
    flexDirection: "row",
  },
  position: {
    flex: 1,
    fontSize: rem
  },
  username: {
    flex: 10,
    fontSize: rem
  },
  points: {
    flex: 1,
    fontSize: rem
  }
});

export default Leaderboard;
