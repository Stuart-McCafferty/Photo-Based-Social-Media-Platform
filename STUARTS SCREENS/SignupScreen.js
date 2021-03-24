import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>

      <Button
        title="Go to LoginScreen"
        onPress={() => navigation.navigate('WelcomeStackNav', { screen: 'Login' })}
      />
    </View>
  );
}
