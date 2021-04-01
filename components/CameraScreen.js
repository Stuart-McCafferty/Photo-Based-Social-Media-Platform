import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Platform, Image, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import * as FaceDetector from 'expo-face-detector';
//import { NavigationEvents } from 'react-navigation';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const cameraRef = useRef();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [imgRegion, setImgRegion] = useState(null);
  const [loaded, setLoaded ] = useState(true);
  const [image64, setImage64 ] = useState(null);
 





  let currentLat = null;
  let currentLon = null;
  let currentSubregion = null;
  let currentRegion = null;
  let currentCountry = null;
  if (errorMsg) {
  } else if (location) {
    currentLat = JSON.stringify(location.coords.latitude);
    currentLon = JSON.stringify(location.coords.longitude);
    currentSubregion = region ? region[0].subregion :"";
    currentRegion = region ? region[0].region :"";
    currentCountry = region ? region[0].isoCountryCode :"";
    console.log("loc" + currentLat);
  }



// Allows camera to be reloaded after leaving a page
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // do something
        setLoaded(true);
        console.log(loaded);
      });
  
      return unsubscribe;
    }); 
    React.useEffect(() => {
      const unsubscribe2 = navigation.addListener('blur', () => {
        // do something
        setLoaded(false);
        console.log(loaded);
      });
  
      return unsubscribe2;
    });



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
        const { status3 } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
        let location = await Location.getCurrentPositionAsync({});

      setLocation(location);

      let tempRegion = await Location.reverseGeocodeAsync(location.coords);
      setRegion(tempRegion);
      console.log(region);
      console.log(location);
      }
    })();
  }, []);



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      exif: true,
      base64: true,
    });

    setImage64({base64:result.base64});

    let imageLocation = await Location.reverseGeocodeAsync({"accuracy": 20,
      "altitude": 216.9527497239431,
      "altitudeAccuracy": 150,
      "heading": 198.5382080078125,
      "latitude": result.exif.GPSLatitude,
      "longitude": result.exif.GPSLongitude,
      "speed": 0.030248723924160004,});
    console.log('Now....')
    console.log(imageLocation);
    let imageSubregion = imageLocation ? imageLocation[0].subregion :"";
    let imageRegion = imageLocation ? imageLocation[0].region :"";
    let imageCountry = imageLocation ? imageLocation[0].isoCountryCode :"";

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
    navigation.navigate('Upload',{image: result.uri,
                                  imageobj: result,
                                  image64: image64,
                                  long: result.exif.GPSLongitude,
                                  lat: result.exif.GPSLatitude,
                                  subregion: imageSubregion,
                                  region: imageRegion,
                                  country: imageCountry})
  };


  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        base64: true,
      });

        setImage64({base64:data.base64});


      navigation.navigate('Upload',{image: data.uri,
                                    imageobj: data,
                                    image64: image64, 
                                    long: currentLon,
                                    lat: currentLat,
                                    subregion: currentSubregion,
                                    region: currentRegion,
                                    country: currentCountry})
                                  
    }
  };



  return (
    <View style={styles.flexbox}> 

      <View style={styles.container}>
        {loaded && (
                          <Camera ref={cameraRef} style={styles.camera} type={type} >
          
                          </Camera>
                )}
        

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
    marginBottom: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 70,
    alignItems: 'center',
    bottom: 10,
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
