import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,Image,TouchableOpacity, Permissions, Dimensions } from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import MapView, { Camera, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Systrace } from 'react-native';

//challenges
import Posts from "./ChallengeScreen/Posts"
import ChallengeInfo from "./ChallengeScreen/ChallengeInfo"




  export default function ExploreScreen({ navigation }){

  
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState(null);

    const mapRef = useRef();      
    let camo =null;


    const [photos,setPhotos] = useState([{caption:'works', latitude:55.91068, longitude: -3.3203, index:1},{caption: 'works even better', latitude:55.92068, longitude: -3.3303, index:2}]);
    const [chal,setChallenge] = useState([{caption:'works', latitude:55.91068, longitude: -3.3203, index:1},{caption: 'works even better', latitude:55.92068, longitude: -3.3303, index:2}]);


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
      mapRef.current.animateCamera({
        center: {
            latitude: currentLat,
            longitude: currentLon,
          },
        pitch: 50,
        heading: 0,
        altitude: 200,
        zoom: 15.5,
        });
    }


  const takePicture2 = async () => {
    console.log("This works2");
    //mapView.current.animateToCoordinate({location:{latitude:55, longitude:3}, duration: 2})
    //const data = await cameraRef.current.takePictureAsync();
    //mapView.current.animateToCoordinate({location:{latitude:55, longitude:3}, duration: 2})
    camo = await mapRef.current.getCamera();

    console.log("So does this2");                   
  
};



  const goBack = async () => {

        mapRef.current.animateCamera({
            center: {
                latitude: currentLat,
                longitude: currentLon,
              },
            pitch: 50,
            heading: 0,
            altitude: 200,
            zoom: 15.5,
            });           
    
  };




//challenges






  //render
  return(
    <View style={{backgroundColor:"white"}}>
    <ScrollView>
        <View style={styles.mapContainer}>
            <MapView
              ref = {mapRef} 
              style={styles.map}
              showsPointsOfInterest = {false}
              customMapStyle={mapStyle}
              showsUserLocation
              showsMyLocationButton
              initialRegion={{
                latitude: currentLat,
                longitude: currentLon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421

            }}>

                  {photos.map((item, index) =>{ 
   
                                                console.log('help pls' + item.latitude);

                                                  return (
                                                  <Marker
                                                    key={index}
                                                    coordinate={{
                                                      latitude: item.latitude,
                                                      longitude: item.longitude,
                                                  }}
                                                    title={item.caption}
                                                    description={'Desc'}
                                                    image={require('../assets/images/icons/photo.png')}
                                                  />);
                                                })}


                  {chal.map((item, index) =>{ 
                    
                                                console.log('help pls' + item.latitude);

                                                  return (
                                                  <Marker
                                                    key={index}
                                                    coordinate={{
                                                      latitude: item.latitude,
                                                      longitude: item.longitude,
                                                  }}
                                                    title={item.caption}
                                                    description={'Desc'}
                                                    image={require('../assets/images/icons/cupbigger.png')}
                                                  />);
                                                })}

                  

                  <Marker
                    key={991}
                    coordinate={{latitude:55.91168, longitude:-3.3193}}
                    title={'Loch at night'}
                    description={'Jack'}
                    image={require('../assets/images/icons/photo.png')}
                  />
                
                <Marker
                    key={992}
                    coordinate={{latitude:55.90912, longitude:-3.31989}}
                    title={'Statue challenge!'}
                    description={'Take a photo of James Watt'}
                    image={require('../assets/images/icons/cupbigger.png')}
                  />

                <Marker
                    key={993}
                    coordinate={{latitude:55.90829, longitude:-3.32162}}
                    title={'Cute squirel!!!'}
                    description={'Hannah'}
                    image={require('../assets/images/icons/photo.png')}
                  />

                  <Marker
                    key={994}
                    coordinate={{latitude:55.90748, longitude:-3.31281}}
                    title={'Old oaks'}
                    description={'Jack'}
                    image={require('../assets/images/icons/photo.png')}
                  />
                

            </MapView>
        </View>


        <View  style={styles.bottom}>
        
            <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'flex-end'}} >
                <MaterialIcons name="my-location" size={34}  style={{padding: 20}} color="black"  onPress={goBack}/> 
                <Text style={{color: "black", fontSize: 28}} onPress={goBack}>{currentRegion},</Text>
                <Text style={{color:'rgb(170,170,170)', fontSize: 28}} onPress={goBack}> {currentCountry}</Text> 
            </View>     
         
        </View>
            <Text style={{color: "black", fontSize: 24, marginLeft:20, marginTop:10}} >Nearby Challenges</Text>
            <View style={styles.PhotoGridRow1}>
              
              <Posts></Posts>
            </View>
    </ScrollView>
    </View>
  );
}

const mapStyle = [
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#9de1c0"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#9de1c0"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9de1c0"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#57bd8e"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#57bd8e"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#57bd8e"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#6b6b6b"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#474747"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#8ea5fb"
      },
      {
        "visibility": "on"
      }
    ]
  }
]


const styles = StyleSheet.create({
  mapContainer: {
    marginTop: Dimensions.get('window').width*0.05,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.9/3*4,
    backgroundColor: 'white',
  },
  bottom: {

    justifyContent: 'flex-end',
    backgroundColor: 'white',

  },
  PhotoGridRow1: {

    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',

  },
});




  {/* <View  style={styles.bottom}>
            <ScrollView horizontal={true} >
              <Button
                title="Challenges Nearby"
                onPress={() => navigation.navigate("Challenges")}
              />
              <Button
                title="Challenges Nearby"
                onPress={goBack}
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
              </View> */}





            {/*<ScrollView horizontal={true}>
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
              </ScrollView>*/}
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
