import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



export default function ProfileIcon(){
  const navigation = useNavigation();
  return(
  <Icon.Button
    name="user"
    color="black"
    backgroundColor="white"
    onPress={() => navigation.navigate('Profile')}
    size={20}
  >
  </Icon.Button>
  )
}
