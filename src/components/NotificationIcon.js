import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



export default function NotificationIcon(){
  const navigation = useNavigation();
  return(
    <Icon.Button
      name="bell"
      color="#28865C"
      backgroundColor="white"
      onPress={() => navigation.navigate("Notification")}
      size={20}
    >
    </Icon.Button>
  )
}
