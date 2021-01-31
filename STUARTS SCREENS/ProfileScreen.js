import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Reload new profile"
        onPress={() => navigation.push('Profile')}
      />
      <Button
        title="Go to Leaderboard"
        onPress={() => navigation.navigate('Leaderboard')}
      />


    </View>
  );
}
