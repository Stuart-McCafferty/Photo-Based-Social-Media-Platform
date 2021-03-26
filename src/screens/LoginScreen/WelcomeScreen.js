import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const [username, onChangeUser] = React.useState('Username');
  const [password, onChangePass] = React.useState('Username');
  const [dob, onChangeDob] = React.useState('Username');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('WelcomeStackNav', { screen: 'Signup' })}
      />
      <Button
        title="Go to LoginScreen"
        onPress={() => navigation.navigate('WelcomeStackNav', { screen: 'Login' })}
      />
      <Button
        title="Go to ResetPasswordScreen"
        onPress={() => navigation.navigate('WelcomeStackNav', { screen: 'Reset Password' })}
      />
    </View>
  );
}
