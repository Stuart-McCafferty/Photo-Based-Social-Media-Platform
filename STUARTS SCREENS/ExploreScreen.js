import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notification')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Challenges"
        onPress={() => navigation.navigate('Challenge')}
      />
    </View>
  );
}