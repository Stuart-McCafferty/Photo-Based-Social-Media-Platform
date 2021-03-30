import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

function ZeroProgress() {
  return (
    <View style={{
              height: 20,
              width: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute", //Here is the trick
              bottom: 0,
              alignSelf: "flex-end"
              }}>
      <Image source={require('../../assets/images/0Progress.png')}
      />
    </View>
  );
}

function ThirtyThreeProgress() {
  return (
    <View style={{
              height: 100,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute", //Here is the trick
              bottom: 0,
              alignSelf: "flex-end"
              }}>
      <Image style={{height: '100%' , width: '100%'}}source={require('../../assets/images/33Progress.png')}
      />
    </View>
  );
}

function SixtySixProgress() {
  return (
    <View style={{
              height: 20,
              width: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute", //Here is the trick
              bottom: 0,
              alignSelf: "flex-end"
              }}>
      <Image source={require('../../assets/images/66Progress.png')}
      />
    </View>
  );
}

function OneHundredProgress() {
  return (
    <View style={{}}>
      <Image source={require('../../assets/images/100Progress.png')}
      />
    </View>
  );
}


export default function Progressbar({ navigation }) {
  const noOfCompleted = '1';  //Change this to change the image, will need to link it with back end

    if (noOfCompleted === '0') {
      return <ZeroProgress />
    } else if (noOfCompleted === '1') {
      return <ThirtyThreeProgress />
    } else if (noOfCompleted === '2') {
      return <SixtySixProgress />
    } else if (noOfCompleted === '3') {
      return <OneHundredProgress />
    }
  };
