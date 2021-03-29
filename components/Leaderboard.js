import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { DOMAIN_NAME } from "../global-variables";
import { COLOR_PRIMARY } from "../components/styles";

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
      <LeaderboardItem position="" data={{ position: "", profile: "", username: "Username", points: "Points" }} usernameHeaderStyle={usernameHeaderStyle} pointsHeaderStyle={pointsHeaderStyle}/>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.key}
        renderItem={({ item, index }) => (
          <LeaderboardItem position={index + 1} data={item} />
        )}
      />
    </View>
  );
}

function LeaderboardItem(props) {

  return (
    <View style={styles.leaderboardItem}>
      <Text style={styles.position}>{props.position}</Text>
      <View style={styles.profile}>{props.profile}</View>
      <Text style={props.usernameHeaderStyle || styles.username}>{props.data.username}</Text>
      <Text style={props.pointsHeaderStyle || styles.points}>{props.data.points}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  leaderboardItem: {
    display: "flex",
    flexDirection: "row",
    margin: 10
  },
  position: {
    flex: 1,
    fontSize: rem,
    fontWeight: "bold",
    color: COLOR_PRIMARY
  },
  profile: {
    flex: 2,
    padding: 10
  },
  username: {
    flex: 9,
    fontSize: rem,
  },
  points: {
    flex: 2,
    fontSize: rem
  },
});

const usernameHeaderStyle = {
  display: "flex",
  flexDirection: "row",
  ...styles.username,
  color: COLOR_PRIMARY,
  fontWeight: "bold"
}

const pointsHeaderStyle = {
  display: "flex",
  flexDirection: "row",
  ...styles.points,
  color: COLOR_PRIMARY,
  fontWeight: "bold"
}

export default Leaderboard;
