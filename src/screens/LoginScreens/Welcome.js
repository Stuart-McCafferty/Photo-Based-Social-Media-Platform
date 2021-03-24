import React from 'react';
import { Text, View, TextInput, StyleSheet, Button} from 'react-native';

const Welcome = () => {
  const [username, onChangeUser] = React.useState('Username');
  const [password, onChangePass] = React.useState('Username');
  const [dob, onChangeDob] = React.useState('Username');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Login"
      />
      <Button
        title="Create Account"
      />
    </View>
  );
}

const styles = StyleSheet.create({
})
export default Welcome;

