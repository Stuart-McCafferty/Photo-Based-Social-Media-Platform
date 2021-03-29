import React, { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import TextSubmit from "./TextSubmit";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { postMethodFetch } from "../functions";
import { DOMAIN_NAME, rem } from "../global-variables";
import { COLOR_CYAN, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, flexbox, text, textSmall } from "./styles";
import Comment from "./Comment";
import GLOBAL from "../GLOBAL";

function Post(props) {

  const [data,setData] = useState({});
  const [hearted,setHearted] = useState(props.data.hearted);
  const [hearts,setHearts] = useState(props.data.hearts);
  const [commentsArray,setCommentsArray] = useState(props.data.commentsArray);
  const [comments,setComments] = useState(props.data.comments);
  const [commentInput,setCommentInput] = useState("");

  const postComment = () => {
    const submission = {
      action: "comment",
      ref: props.data.ref,
      comment: commentInput,
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    };
    postMethodFetch(submission, "/interact", res => {
      if (res.success) {
	setCommentsArray([...commentsArray, res.comment])
	setComments(comments + 1);
      }
    });
  }

  const toggleHeart = () => {
    console.log("HEART");
    const value = !hearted;
    const submission = {
      action: "heart",
      value,
      ref: props.data.ref,
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    };
    console.log(submission);
    postMethodFetch(submission, "/interact", res => {
      setHearted(res.hearted);
      setHearts(hearts + (res.hearted ? 1 : -1));
    });
  };

  return (
    <View style={styles.container}>

      <View style={flexbox}>
	<Image style={styles.profilePicture} source={{ uri: `https://photography-app-content.s3.amazonaws.com/profile_pictures/${props.data.poster}` }} />
	<TouchableOpacity onPress={() => props.navigation.navigate("Profile", { username: props.data.poster })}><Text style={styles.username}>{props.data.poster}</Text></TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
	<Image
	  style={styles.image}
	  source={{ uri: `https://photography-app-content.s3.amazonaws.com/photos/${props.data.ref}` }}
	/>
      </View>

      <View style={flexbox}>
	<View style={styles.iconsContainer}>
	  <Icon
	    name="comment-alt"
            color="black"
            onPress={() => console.log("Comment clicked")}
            size={1.5 * rem}
	  />  
	  <Text style={styles.iconNumber}>{comments}</Text>
	  <TouchableOpacity onPress={toggleHeart}>
	    <Image
	      source={require(`../assets/images/icons/heart${hearted ? "-red" : ""}.svg`)}
	      style={styles.icon}
	    />
	  </TouchableOpacity>
	  <Text style={styles.iconNumber}>{hearts}</Text>
	</View>
	<View>
	  <Text style={text}>{props.data.location}</Text>
	</View>
      </View>

      <Text style={text}>{props.data.caption}</Text>

      <Text style={styles.hashtags}>{props.data.hashtags.length > 0 ? "#"+props.data.hashtags.join(", #") : ""}</Text>

      {commentsArray.map(item => <Comment navigation={props.navigation} data={item} />)}

      <TextSubmit placeholder="Leave a comment..." buttonText="Comment" onChangeText={setCommentInput} onSubmit={postComment} />

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
    width: 1.8 * rem,
    height: 1.8 * rem,
    borderRadius: 0.9 * rem
  },
  imageContainer: {
    width: "100%",
    height: 14 * rem,
    marginTop: 0.3 * rem,
    marginBottom: 0.3 * rem
  },
  image: {
    width: "100%",
    height: "100%"
  },
  username: {
    marginLeft: 0.4 * rem,
    fontSize: LARGE_TEXT_SIZE
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1
  },
  icon: {
    width: 1.5 * rem,
    height: 1.5 * rem
  },
  iconNumber: {
    fontSize: TEXT_SIZE,
    marginLeft: 0.4 * rem,
    marginRight: 0.4 * rem
  },
  hashtags: {
    color: COLOR_CYAN
  }
});

export default Post;
