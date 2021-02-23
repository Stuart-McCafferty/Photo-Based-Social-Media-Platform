import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const cameraRef = useRef();
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
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
    navigation.navigate('Upload',{image: result.uri})
  };


  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      const source = data.uri;

      navigation.navigate('Upload',{image: data.uri})
      
    }
  };



  return (
    <View style={styles.flexbox}>
      <View style={styles.container}>
        <Camera ref={cameraRef} style={styles.camera} type={type} >
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
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={takePicture}>
              <Text style={styles.text}> Take Pic </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={pickImage}>
              <Text style={styles.text}> Gallery </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  flexbox:{
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row'
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
});
