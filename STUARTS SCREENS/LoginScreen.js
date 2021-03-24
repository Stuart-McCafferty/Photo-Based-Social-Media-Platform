import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>

      <Button
        title="Go to ResetPasswordScreen"
        onPress={() => navigation.navigate('WelcomeStackNav', { screen: 'Reset Password' })}
      />

      <Button
        title="Login"
        onPress={() => navigation.navigate('MainTab', {
          screen: 'FeedStackNav', params: {
            screen: 'Feed'
          }
        })}
      />
    </View>
  );
}
