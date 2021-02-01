import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function FeedScreen({ route, navigation }) {
    const {image} = route.params;
    const [value, onChangeText] = React.useState('Give your photo a title!');
  
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button
        title="Upload"
        
      />
    </View>
  );
}