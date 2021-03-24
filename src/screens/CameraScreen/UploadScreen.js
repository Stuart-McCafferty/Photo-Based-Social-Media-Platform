import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions } from 'react-native';

export default function FeedScreen({ route, navigation }) {
    const {image} = route.params;
    const {long} = route.params;
    const {lat} = route.params;
    const [value, onChangeText] = React.useState('Give your photo a title!');
    const myApiKey = 'AIzaSyAdAGw-uAibA-dJmswJt-nuFAsKS_0Rtzw';
    var country = ''
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


    
    
    return (
    <View style={{flex:1, backgroundColor:'white', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height*.4, alignItems: 'center', backgroundColor: 'black'}}>{/*image container */}
        {<Image source={{ uri: image }} resizeMode={'contain'} style={{ width: '100%', height: '100%', maxHeight: Dimensions.get('window').height*.4, maxWidth: Dimensions.get('window').width*.9 }} />}
      </View>
      <Text style={{height: 70, padding: 20, margin: 10, fontSize: 28}}> Lat {lat} </Text>
      <Text style={{height: 70, padding: 20, margin: 10, fontSize: 28}}> Long {long} </Text>
      <TextInput
      style={{ height: 70, borderBottomWidth:1, padding: 20, margin: 10, fontSize: 28 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button
        title="Uploads"
        color="#004a44"
      />
    </View>
  );
}

