import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

function ZeroProgress(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
      <Image source={require('../../assets/images/0Progress.png')}
      />
    </View>
  );
}

function ThirtyThreeProgress(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
      <Image source={require('../../assets/images/33Progress.png')}
      />
    </View>
  );
}

function SixtySixProgress(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
      <Image source={require('../../assets/images/66Progress.png')}
      />
    </View>
  );
}

function OneHundredProgress(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
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
