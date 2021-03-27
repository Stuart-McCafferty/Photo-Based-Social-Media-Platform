import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



export default function ProfileIcon(){
  const navigation = useNavigation();
  return(
  <Icon.Button
    name="user"
    color="white"
    backgroundColor="#28865C"
    onPress={() => navigation.navigate('Profile')}
    size={20}
  >
  </Icon.Button>
  )
}
