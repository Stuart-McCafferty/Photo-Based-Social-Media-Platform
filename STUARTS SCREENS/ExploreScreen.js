import * as React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,Image,TouchableOpacity, Permissions, Dimensions } from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import MapView from 'react-native-maps';


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
