import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



export default function TrophyIcon(){
  const navigation = useNavigation();
  return(
    <Icon.Button
      name="trophy"
      color="#28865C"
      backgroundColor="white"
      onPress={() => navigation.navigate("Leaderboard")}
      size={20}
    >
    </Icon.Button>
  )
}
