import React from 'react';
import { Text, View, TextInput, StyleSheet, Button} from 'react-native';

const Page1 = () => {
  const [username, onChangeUser] = React.useState('Username');
  const [password, onChangePass] = React.useState('Username');
  const [dob, onChangeDob] = React.useState('Username');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={styles.text}
      >
        First name:
      </Text>
      <TextInput
      style={styles.textBox}
      onChangeText={text => onChangeUser(text)}
      username={username}
      />
      <Text>
        Last Name:
      </Text>
      <TextInput
      style={styles.textBox}
      onChangeText={text => onChangePass(text)}
      password={password}
      />
      <Text>
        Date of Birth:
      </Text>
      <TextInput
      style={styles.textBox}
      onChangeText={text => onChangePass(text)}
      dob={dob}
      />
      <Button
        title="Next"
      />
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
    borderWidth: 1
  },
  text: {

  }
})
export default Page1;
