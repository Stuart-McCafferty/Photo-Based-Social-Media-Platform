import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions, Switch } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { ceil } from 'react-native-reanimated';

export default function FeedScreen({ route, navigation }) {
    const {image} = route.params;
    const {long} = route.params;
    const {lat} = route.params;
    //const latShort = lat.toFixed(3);
    //const lonShort = long.toFixed(3);
    const {region} = route.params;
    const {country} = route.params;
    const [value, onChangeText] = React.useState('Title');
    const myApiKey = 'AIzaSyAdAGw-uAibA-dJmswJt-nuFAsKS_0Rtzw';
    const [shouldShow, setShouldShow] = useState(true);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //console.log(image.exif);
    
/*
    function getMoviesFromApiAsync() {
      return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + long + '&key=' + myApiKey)
        .then(response => response.json())
        .then(responseJson => {
          return responseJson.results.address_components.long_name;
        })
        .catch(error => {
          console.error(error);
        });
    }
*/

    /*
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + long + '&key=' + myApiKey)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
            this.setState({ country : JSON.stringify(responseJson.results.address_components.long_name)});
              })
*/


// face detection
useEffect(() => {
  (async () => {
  const options = { mode: FaceDetector.Constants.Mode.fast };
  const isFace = await FaceDetector.detectFacesAsync(image, options);
  console.log(isFace);

  if( isFace.faces.length === 0){
    console.log("no faces!!! :)");
    await setShouldShow(shouldShow);
  }
  else{
    console.log('fACE >:(');
    await setShouldShow(!shouldShow);
  }
})();
}, []);

    
    return (

    <View style={{flex:1, backgroundColor:'white', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <View style={{elevation:1, width: Dimensions.get('window').width, height: Dimensions.get('window').height*.4, alignItems: 'center', backgroundColor: 'black'}}>{/*image container */}
        {<Image source={{ uri: image }} resizeMode={'contain'} style={{ width: '100%', height: '100%', maxHeight: Dimensions.get('window').height*.4, maxWidth: Dimensions.get('window').width*.9 }}/>}
      </View>

      <View style={styles.container}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ?  null : (
          <View style={{
            width: Dimensions.get('window').width,
            height: 30,
            backgroundColor: 'crimson',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{color: 'white'}}>⚠️ Face Detected</Text>
          </View>
        ) }
      </View>

      <View style={{flex:0.6, flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent:'center'}}>
            <MaterialIcons name="my-location" size={34}  style={{padding: 20}} color="black" /> 
            <Text style={{color: "black", fontSize: 28}}>{region},</Text>
            <Text style={{color:'rgb(170,170,170)', fontSize: 28}}> {country}</Text> 
      </View>
      
      <View style={{flex:1,flexDirection:'row', }}>
          <View style={{flex:0.5, flexDirection:'column', marginLeft:80}}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{color:'rgb(170,170,170)', fontSize: 20}}>Lat: </Text> 
                <Text style={{color: "black", fontSize: 20}}>{lat}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{color:'rgb(170,170,170)', fontSize: 20}}>Lon: </Text> 
                <Text style={{color: "black", fontSize: 20}}>{long}</Text>
              </View>
          </View>
          <View style={{flex:0.3, flexDirection:'column'}}> 
            <Switch
             onValueChange={toggleSwitch}
             value={isEnabled}     
            />
          </View>
      </View>
      
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}}>
            <MaterialIcons name="text-fields" size={34} style={{padding: 20}} color="black" /> 
            <TextInput
              style={{borderBottomWidth:1, fontSize: 28 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
      </View>

      <View style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}}>
            <MaterialCommunityIcons name="trophy-outline" size={34} style={{padding: 20}} color="black" />
            <TextInput
              style={{borderBottomWidth:1, fontSize: 28 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
      </View>

      <View style={{flex:1,  alignSelf: 'center', }}>
            <Button
              title="Post"
              color="#004a44"
            />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.35,
  },
});