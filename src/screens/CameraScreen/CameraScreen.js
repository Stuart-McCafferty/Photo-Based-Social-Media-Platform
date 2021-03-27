import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Platform, Image, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import * as FaceDetector from 'expo-face-detector';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const cameraRef = useRef();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);




  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);

      let tempRegion = await Location.reverseGeocodeAsync(location.coords);
      setRegion(tempRegion);
      console.log(region);
    })();
  }, []);




  let currentLat = null;
  let currentLon = null;
  let currentReg = null;
  let currentCountry = null;
  if (errorMsg) {
  } else if (location) {
    currentLat = JSON.stringify(location.coords.latitude);
    currentLon = JSON.stringify(location.coords.longitude);
    currentReg = region ? region[0].subregion :"";
    currentCountry = region ? region[0].isoCountryCode :"";
    console.log()
  }




//
  /*
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }




    const __takePicture = async () => {
    const photo = await cam.takePictureAsync()
  
    console.log(photo);
  
     
      setImage(photo.uri);
      
      navigation.navigate('Upload',{image: photo.uri})
   
  }
*/

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const { status2 } = await Camera.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      exif: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
    navigation.navigate('Upload',{image: result.uri,
                                  long: result.exif.GPSLongitude,
                                  lat: result.exif.GPSLatitude,
                                  region: currentReg,
                                  country: currentCountry})
  };


  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();


      navigation.navigate('Upload',{image: data.uri,
                                    long: currentLon,
                                    lat: currentLat,
                                    region: currentReg,
                                    country: currentCountry})
                                  
    }
  };



  return (
    <View style={styles.flexbox}>
      <View style={styles.container}>
        <Camera ref={cameraRef} style={styles.camera} type={type} >
          
        </Camera>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <MaterialIcons name="flip-camera-android" size={34}  style={{padding: 20}} color="white" /> 
            </TouchableOpacity>
            <Pressable
              style={styles.capture}
              onPress={takePicture}>
            </Pressable>
            <TouchableOpacity
              style={styles.button}
              onPress={pickImage}>
              <MaterialIcons name="add-photo-alternate" size={34}  style={{padding: 20}} color="white" /> 
            </TouchableOpacity>
          </View>
    </View>
  );
}




const styles = StyleSheet.create({
  flexbox:{
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width/3*4,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  capture: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
