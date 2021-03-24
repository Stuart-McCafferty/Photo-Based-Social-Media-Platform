/*import React, { useState } from "react";
import Posts from "../src/screens/challengeScreen/Posts"
import { StyleSheet, Text, View, Button, flatList,Image,PullView,FlatList} from 'react-native';




export default function ChallengeScreen({ navigation }) {
    const [challenge , challengename] = useState=([
        {
            id: '1',
            name: 'challenge 1',
        },
        {
            id: '2',
            name: "challenge 2",
        },
        {
            id: '3',
            name: "challenge 3",
        },
        {
            id: '4',
            name: "challenge 4",
        },
        {
            id: '5',
            name: "challenge 5",
        }
    ])

  return (

    
   <View styles={styles.container}>
       <View styles= {styles.header}>
          <View styles = {styles.body}>
              <View styles = {styles.frontbody}>
                 <Text style= {styles.title} >Challenges</Text>
              </View>
              <View styles = {styles.midbody}>
                  <Text style = {styles.challengename}>Started</Text>
                  <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
                  <Text style = {styles.challengename}>Challenges near you</Text>
                  <Text style = {styles.challengename}>Challenges in Scotland</Text>
              </View>
          </View>
       </View>
   </View>
  );

}


const styles = StyleSheet.create({
 container:{
     flex: 1,
     padding: 10,

 },
 header:{
     height:50,
     

 },
 body:{
     paddingLeft:20
 },

 frontbody:{
    
 },


 title:{
     fontSize:30,
     fontWeight:'bold',
     paddingTop:30,
     paddingLeft:20
 },
 challengename:{
     fontSize:20,
     fontWeight:'bold',
     paddingTop:30,
     paddingLeft:30,

 },

 item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
*/
