import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
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
