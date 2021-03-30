import React, { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import TextSubmit from "./TextSubmit";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { postMethodFetch } from "../functions";
import { DOMAIN_NAME, rem } from "../global-variables";
import { COLOR_CYAN, LARGE_TEXT_SIZE, SMALL_TEXT_SIZE, TEXT_SIZE, flexbox, text, textSmall } from "./styles";
import Comment from "./Comment";
import GLOBAL from "../GLOBAL";
import heartImage from "../assets/images/icons/heart.png";
import heartImageRed from "../assets/images/icons/heart-red.png";

function Post(props) {

  const [data,setData] = useState({});
  const [hearted,setHearted] = useState(props.data.hearted);
  const [hearts,setHearts] = useState(props.data.hearts);
  const [commentsArray,setCommentsArray] = useState(props.data.commentsArray);
  const [comments,setComments] = useState(props.data.comments);
  const [commentsVisible,setCommentsVisible] = useState(false);
  const [commentInput,setCommentInput] = useState("");
  const [heartImageFile,setHeartImageFile] = useState(props.data.hearted ? heartImageRed : heartImage);

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
      if (res.hearted) setHeartImageFile(heartImageRed);
      else setHeartImageFile(heartImage);
      setHearts(hearts + (res.hearted ? 1 : -1));
    });
  };

  return (
    <View style={styles.container}>

      {props.data.type === "review" ? (<Text>Question</Text>) : null}

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
            onPress={() => setCommentsVisible(!commentsVisible)}
            size={1.5 * rem}
	  />
	  <Text style={styles.iconNumber}>{comments}</Text>
	  <TouchableOpacity onPress={toggleHeart}>
	    <Image
	      source={heartImageFile}
	      style={styles.icon}
	    />
	  </TouchableOpacity>
	  <Text style={styles.iconNumber}>{hearts}</Text>
	</View>
	<View>
	  <Text style={text}>{props.data.location}</Text>
	</View>
      </View>

      <View>
	<Text style={text}>{props.data.caption}</Text>
	<Text style={styles.hashtags}>{props.data.hashtags.length > 0 ? "#"+props.data.hashtags.join(", #") : ""}</Text>
      </View>

      {commentsVisible ? commentsArray.map((item, index) => <Comment key={index} navigation={props.navigation} data={item} />) : null}

      <TextSubmit placeholder="Leave a comment..." buttonText="Post" onChangeText={setCommentInput} onSubmit={postComment} />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 0.4 * rem,
    marginBottom: 0.4 * rem,
    padding:10
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
    marginBottom: 0.3 * rem,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
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
    fontWeight: "700",
    color: COLOR_CYAN
  }
});

export default Post;
