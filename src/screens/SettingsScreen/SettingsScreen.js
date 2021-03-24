import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native';

class Settings extends Component {
  state = {
    changesMade: false,
    countryText: null,
    areaText: null,
    bioText: null
  }

  textChanged = () => {
    this.setState({
      changesMade: true
    })
  }

  saveChanges = () => {
    this.setState({
      changesMade: false
    })
    Alert.alert("Changes saved",);
  }

  goBack = () => {
    if(this.state.changesMade){
      Alert.alert(
      "Unsaved Changes",
      "All unsaved changes will be lost",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    }else{

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
        >
          Country:
        </Text>
        <TextInput
        style={styles.textBox}
        onChangeText={this.textChanged,this.setState({countryText: text})}
        />
        <Text
          style={styles.title}
        >
          Area:
        </Text>
                <TextInput
        style={styles.textBox}
        onChangeText={this.textChanged}
        />
        <Text
          style={styles.title}
        >
          Bio:
        </Text>
        <TextInput
        style={styles.bioBox}
        multiline
        onChangeText={this.textChanged}
        />
        
        <View style={styles.buttonRow}>
          <Button
            title="Save"
            onPress={this.saveChanges}
          />
          <Button
            title="Back"
            onPress={this.goBack}
          />
        </View>
      </View>
    )
  }
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
  bioBox: {
    backgroundColor: '#DDDDDD',
    margin: 5,
    height: 120,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "left", 
  },
  buttonRow: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    flexDirection: "row", 
  },
  title: {
    margin: 2,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default Settings;