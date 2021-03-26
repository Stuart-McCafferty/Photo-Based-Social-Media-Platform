import React from 'react';
import { Text, View, TextInput, StyleSheet, Button} from 'react-native';

const SignUp = () => {
  const [username, onChangeUser] = React.useState('Username');
  const [password, onChangePass] = React.useState('Username');
  const [comfPassword, onChangeComfPass] = React.useState('Username');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={styles.text}
      >
        Username:
      </Text>
      <TextInput
        style={styles.textBox}
        onChangeText={text => onChangeUser(text)}
        username={username}
      />
      <Text>
        Password:
      </Text>
      <TextInput
        style={styles.textBox}
        onChangeText={text => onChangePass(text)}
        password={password}
      />
      <Text>
        Re-Enter Password:
      </Text>
      <TextInput
        style={styles.textBox}
        onChangeText={text => onChangePass(text)}
        comfPassword={comfPassword}
      />
      <View style={styles.buttonRow}>
        <Button
          title="Back"
        />
        <Button
          title="Create Account"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: '#DDDDDD',
    margin: 5,
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {

  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
export default SignUp;