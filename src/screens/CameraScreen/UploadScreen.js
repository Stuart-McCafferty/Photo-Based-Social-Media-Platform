import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions } from 'react-native';

export default function FeedScreen({ route, navigation }) {
    const {image} = route.params;
    const [value, onChangeText] = React.useState('Give your photo a title!');
  
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <View style={{}}>{/*image container */}
        {<Image source={{ uri: image }} style={{ width: Dimensions.get('window').width, height: 100 }} />}
      </View>
      <TextInput
      style={{ height: 70, borderColor: 'gray', borderWidth: 1, padding: 20, margin: 30, fontSize: 20 }}
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