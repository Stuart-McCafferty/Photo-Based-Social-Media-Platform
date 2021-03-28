import React, { useState, useEffect, useRef } from 'react';
  import { StyleSheet, Text, View, Button,ImageBackground,Image,TouchableOpacity, Permissions, Dimensions } from 'react-native';
  import {ScrollView,TextInput} from 'react-native-gesture-handler';
  import Icon from '@expo/vector-icons/AntDesign';
  import MapView, { Camera, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
  import * as Location from 'expo-location';

  import { MaterialIcons } from '@expo/vector-icons'; 
  import { Systrace } from 'react-native';


  export default function ExploreScreen({ navigation }){


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);

    const mapRef = useRef();      
    let camo =null;

  //get the location
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
        console.log("location" + region);
        //await mapView.animateToCoordinate() 


      })();
    }, []);



    

  //set location variables
    let currentLat = 0;
    let currentLon = 0;
    let currentRegion = null;
    let currentCountry = null;
    if (errorMsg) {
    } else if (location) {
      currentLat = parseFloat(location.coords.latitude);
      currentLon = parseFloat(location.coords.longitude);
      currentRegion = region ? region[0].subregion :"";
      currentCountry = region ? region[0].isoCountryCode :"";
      
    }


  const takePicture2 = async () => {
    console.log("This works2");
    //mapView.current.animateToCoordinate({location:{latitude:55, longitude:3}, duration: 2})
    //const data = await cameraRef.current.takePictureAsync();
    //mapView.current.animateToCoordinate({location:{latitude:55, longitude:3}, duration: 2})
    camo = await mapRef.current.getCamera();
  mapRef.current.setCamera({camera:{centre:{latitude:55, longitude:-3}, pitch:1, heading:1}, duration: 1});
    console.log("So does this2");                   
  
};



  const takePicture = async () => {
      console.log("This works");
      //mapView.current.animateToCoordinate({location:{latitude:55, longitude:3}, duration: 2})
      //const data = await cameraRef.current.takePictureAsync();
      //mapView.current.animateToCoordinate({location:{latitude:55, longitude:3}, duration: 2})
          console.log(camo);   
          
      console.log("So does this");                   
    
  };




  //render
  return(
    <View style={{flex:1, backgroundColor:"white"}}>

        <View style={styles.mapContainer}>
            <MapView
              ref = {mapRef} 
              style={styles.map}
              showsUserLocation
              showsMyLocationButton
              initialRegion={{
                latitude: currentLat,
                longitude: currentLon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421

            }}>
            </MapView>
        </View>




        <View  style={styles.bottom}>
        
        <View style={{flex:1, flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}}>
            <MaterialIcons name="my-location" size={34}  style={{padding: 20}} color="black" /> 
            <Text style={{color: "black", fontSize: 28}}>{currentRegion},</Text>
            <Text style={{color:'rgb(170,170,170)', fontSize: 28}}> {currentCountry}</Text> 
          </View>     

            <ScrollView horizontal={true}>
              <Text style={{ fontSize: 24 }}>Photos nearby</Text>


              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
            </ScrollView>
          </View>
          <View  style={styles.bottom}>
            <ScrollView horizontal={true} >
              <Button
                title="Challenges Nearby"
                onPress={() => navigation.navigate('Challenge')}
              />
              <Button
                title="Challenges Nearby"
                onPress={takePicture}
              />
              <Button
                title="Challenges Nearby"
                onPress={takePicture2}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
            </ScrollView>
          </View>


    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.9,
    backgroundColor: 'white',
  },
  bottom: {
    flex: 0.25,
    justifyContent: 'flex-end',
    backgroundColor: 'white',

  }
});

/*
  export default class ExploreScreen extends React.Component {
    state={
      location: {},
      popularSelected:true,
      errorMessage: '',
      address: null,
      errorMsg: null,
    }

    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMsg: 'Permission to access location was denied',
        });
      }
      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      this.setState({ address });
    };

    componentDidMount() {
      this._getLocationAsync();
    }

    //map api stuff
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        markers: [],
      };
    }

    fetchMarkerData() {
      fetch('https://feeds.citibikenyc.com/stations/stations.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            markers: responseJson.stationBeanList,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    componentDidMount() {
      this.fetchMarkerData();
    }

    render(){
      let text = 'Waiting...';
      if (this.state.errorMsg) {
        text = this.state.errorMsg;
      } else if (this.state.address) {
        text = this.state.address[0].city;
      }
      return (
        <View style={{flex:1}}>

        <View style={{ flex: 1 }}>



          <View style={styles.container}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 40.76727216,
                longitude: -73.99392888,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421

            }}>
              {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
                const coords = {
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                };

                const metadata = `Status: ${marker.statusValue}`;

                return (
                    <MapView.Marker
                        key={index}
                        coordinate={coords}
                        title={marker.stationName}
                        description={metadata}
                    />
                );
               })}
            </MapView>

          </View>
          <View style={{ flex: 0.2, alignSelf: 'flex-start', justifyContent: 'center', }}>
            <Text style={{ fontSize: 30 }}>Edinburgh, United Kingdom</Text>
          </View>
          <View  style={styles.bottom}>
            <ScrollView horizontal={true}>
              <Text style={{ fontSize: 24 }}>Photos nearby</Text>


              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
            </ScrollView>
          </View>
          <View  style={styles.bottom}>
            <ScrollView horizontal={true} >
              <Text style={{ fontSize: 24 }}>Challenges nearby</Text>
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  width: 64,
                  height: 64,
                }}
              />
            </ScrollView>
          </View>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    map: {
      width: Dimensions.get('window').width*0.9,
      height: Dimensions.get('window').width*0.9,
      backgroundColor: 'white',
    },
    bottom: {
      flex: 0.2,
      justifyContent: 'flex-end',
      backgroundColor: 'white',

    }
  });


  */