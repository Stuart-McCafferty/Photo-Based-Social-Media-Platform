import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions, Switch, ScrollView, Alert, TouchableOpacity, Pressable } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { ceil } from 'react-native-reanimated';
import {Picker} from '@react-native-picker/picker';

export default function FeedScreen({ route, navigation }) {
    const {image} = route.params; //POST
    const {long} = route.params; //POST
    const {lat} = route.params; //POST
    let latShort = parseFloat(lat).toFixed(4); 
    let lonShort = parseFloat(long).toFixed(4);
    const {region} = route.params; //POST
    const {country} = route.params; //POST
    const [face, faceExists] = useState(false); //POST

    const [titleText, onChangeTitle] = React.useState('Title'); //POST
    const [challenge, onChangeChallenge] = useState(); //POST
    const [tag, onChangeTag] = React.useState('Comma-separated tags');


    const [shouldShow, setShouldShow] = useState(true);
    const [shouldShowCoord, setShouldShowCoord] = useState(true);
    const [shouldShowBut, setShouldShowBut] = useState(true);
    const [isEnabled, setIsEnabled] = useState(true);
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



//To post: image*, lat/latShort, long/longShort, region*, country*,  titleText, challenge, face

//submit post
const submitButton = async () => {
  console.log("No, bad!"); 
  if (face == true) {
    console.log("No, bad!2"); 

    Alert.alert(
      "We think we see a person.",
      "Eden is a service for sharing photos of things you find in the out in the world. This does not include humans. By pressing 'Post Anyway', you confirm that this image does not contain any people. If it does, your photo will be removed.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Post anyway", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    )              
  }
};



// face detection
useEffect(() => {
  (async () => {
  const options = { mode: FaceDetector.Constants.Mode.fast };
  const isFace = await FaceDetector.detectFacesAsync(image, options);
  console.log(isFace);

  if( isFace.faces.length === 0){
    console.log("no faces!!! :)");
    await setShouldShow(shouldShow);
    await setShouldShowBut(shouldShowBut);
    faceExists(false);
    console.log('face is ' + face);
  }
  else{
    console.log('fACE >:(');
    await setShouldShow(!shouldShow);
    await setShouldShowBut(!shouldShowBut);
    faceExists(true);
    console.log('face is ' + face);
  }
})();
}, []);

    
    return (
      <View>
    <ScrollView  contentContainerStyle={{justifyContent: 'space-between', }}>  
    <View style={{flex:2, backgroundColor:'white', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <View style={{elevation:1, width: Dimensions.get('window').width, height: Dimensions.get('window').height*.4, alignItems: 'center', backgroundColor: 'black'}}>{/*image container */}
        {<Image source={{ uri: image }} resizeMode={'contain'} style={{ width: '100%', height: '100%', maxHeight: Dimensions.get('window').height*.4, maxWidth: Dimensions.get('window').width*.9 }}/>}
      </View>

      <View style={styles.container}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ?  <View style={{
            width: Dimensions.get('window').width,
            height: 30,
            backgroundColor: 'white',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          </View> : (
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

      <View style={{flex:1,  alignSelf: 'center', }}>

      </View>


      <View style={{flex:1.5, flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent:'center'}}>
            <MaterialIcons name="my-location" size={34}  style={{padding: 20}} color="black" /> 
            <Text style={{color: "black", fontSize: 28}}>{region},</Text>
            <Text style={{color:'rgb(170,170,170)', fontSize: 28}}> {country}</Text> 
      </View>
      

      {shouldShowCoord ?  
          <View style={{flex:1,flexDirection:'row', }}>
            <View style={{flex:0.5, flexDirection:'column', marginLeft:80}}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{color:'rgb(170,170,170)', fontSize: 20}}>Lat: </Text> 
                  <Text style={{color: "black", fontSize: 20}}>{latShort}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{color:'rgb(170,170,170)', fontSize: 20}}>Lon: </Text> 
                  <Text style={{color: "black", fontSize: 20}}>{lonShort}</Text>
                </View>
            </View>
            <View style={{flex:0.2, flexDirection:'column'}}> 
              <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}     
              />
            </View>
          </View> 
          : (
          <View style={{flex:1,flexDirection:'row', }}>
            <View style={{flex:0.5, flexDirection:'column', marginLeft:80}}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{color:'rgb(170,170,170)', fontSize: 20}}>Lat: </Text> 
                  <Text style={{color: "gray", fontSize: 20, textDecorationLine: 'line-through'}}>{latShort}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{color:'rgb(170,170,170)', fontSize: 20}}>Lon: </Text> 
                  <Text style={{color: "gray", fontSize: 20, textDecorationLine: 'line-through'}}>{lonShort}</Text>
                </View>
            </View>
            <View style={{flex:0.2, flexDirection:'column'}}> 
              <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}     
              />
            </View>
          </View>
        ) }





        <View style={{flex:1,}}> 
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}}>
                <MaterialIcons name="text-fields" size={34} style={{padding: 20}} color="black" /> 
                <TextInput
                  style={{borderBottomWidth:1, fontSize: 28 }}
                  onChangeTitle={text => onChangeTitle(text)}
                  value={titleText}
                />
          </View>
      </View> 
      <View style={{flex:1,}}>
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}}>
                <MaterialCommunityIcons name="trophy-outline" size={34} style={{padding: 20}} color="black" />
                <Picker
                  style={{ width: Dimensions.get('window').width*0.4, postion: 'absolute', transform: [{scaleX: 1.8}, {scaleY: 1.8}], left: 50,}}
                  selectedValue={challenge}
                  onValueChange={(itemValue, itemIndex) =>
                    onChangeChallenge(itemValue)
                  }>
                  <Picker.Item label="Challenge" value="none" />
                  <Picker.Item label="Birds" value="birds" />
                  <Picker.Item label="Slug" value="slug" />
                  <Picker.Item label="Buildings" value="building" />
                </Picker>

          </View>
      </View>
      <View style={{flex:1,}}>
          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}}>
                <MaterialCommunityIcons name="tag-outline" size={24} size={34} style={{padding: 20}} color="black" />
                <TextInput
                  style={{borderBottomWidth:1, fontSize: 28, }}
                  onChangeTag={text => onChangeTag(text)}
                  value={tag}
                />
          </View>
      </View>


    
    </View>
    
    </ScrollView>
    {shouldShowBut ?              
        <Pressable
            activeOpacity={0.7}
            onPress={submitButton}
            style={{
              position: 'absolute',
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              right: 10,
              bottom: 10,
              
              borderRadius: 50,
              backgroundColor: 'teal',
              alignSelf: 'flex-end',
              
            }}>
              <MaterialIcons name="send" size={28} color="white" />
      </Pressable> : (
      <Pressable
            activeOpacity={0.7}
            onPress={submitButton}
            style={{
              position: 'absolute',
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              right: 10,
              bottom: 10,
              
              borderRadius: 50,
              backgroundColor: 'crimson',
              alignSelf: 'flex-end',
              
            }}>
              <MaterialIcons name="send" size={28} color="white" />
      </Pressable>
        ) }
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