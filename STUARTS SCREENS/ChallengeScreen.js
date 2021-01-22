import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ChallengeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Challenge Screen</Text>
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notification')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}