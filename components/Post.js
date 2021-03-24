import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, containerStyle, rem } from "../global-variables";
import { SMALL_TEXT_SIZE, flexbox, textSmall } from "./styles";
import NavBar from "./NavBar";

function Post(props) {

  const [data,setData] = useState({});
  const [comments,setComments] = useState([]);

  useEffect(() => {
    fetch(`${DOMAIN_NAME}/api/comments/${props.data.ref}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setComments(data);
    });
    fetch(`${DOMAIN_NAME}/api/photo/${props.data.ref}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
      console.log(data);
    });

  }, []);


  return (
    <View style={styles.container}>

      <View style={flexbox}>
	<Image style={styles.profilePicture} source={{ uri: `https://photography-app-content.s3.amazonaws.com/profile_pictures/${data.poster}` }} />
	<Text style={styles.username}>{data.poster}</Text>
      </View>

      <View style={styles.imageContainer}>
	<Image style={styles.image} source={{ uri: `https://photography-app-content.s3.amazonaws.com/${props.data.ref}` }} />
      </View>

      <View style={flexbox} >
	<View style={styles.iconsContainer} >
	  <Image style={styles.icon} source={{ uri: "https://photography-app-content.s3.amazonaws.com/content/comment.svg" }} />
	  <Text style={styles.iconNumber}>3</Text>
	  <Image style={styles.icon} source={{ uri: "https://photography-app-content.s3.amazonaws.com/content/heart.svg" }} />
	  <Text style={styles.iconNumber}>{data.hearts}</Text>
	</View>
	<View>
	  <Text style={textSmall}>{data.location}</Text>
	</View>
      </View>

      <Text style={textSmall}>{data.caption}</Text>

      <View>
	<FlatList
	  data={comments}
	  renderItem={({item}) => (<Text>comment</Text>)}
	/>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 0.8 * rem,
    marginBottom: 0.8 * rem
  },
  profilePicture: {
    width: 1.5 * rem,
    height: 1.5 * rem,
    borderRadius: 0.75 * rem
  },
  imageContainer: {
    width: "100%",
    height: 10 * rem,
    marginTop: 0.3 * rem,
    marginBottom: 0.3 * rem
  },
  image: {
    width: "100%",
    height: "100%"
  },
  username: {
    fontSize: rem
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1
  },
  icon: {
    width: 1.2 * rem,
    height: 1.2 * rem
  },
  iconNumber: {
    fontSize: SMALL_TEXT_SIZE,
    marginLeft: 0.4 * rem,
    marginRight: 0.4 * rem
  }
});

export default Post;
