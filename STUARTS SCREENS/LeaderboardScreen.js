import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button, StatusBar } from 'react-native';


export default function LeaderboardScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Leaderboard Screen</Text>
    </View>
  );
}
