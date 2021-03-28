import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
import Post from "./Post";
import ProfileCard from "./ProfileCard";
import TextSubmit from "./TextSubmit";
import { DOMAIN_NAME, appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { COLOR_PRIMARY, COLOR_SECONDARY, TEXT_SIZE, buttonStyle, flexbox } from "./styles";
import GLOBAL from "../GLOBAL";

function Search({ navigation }) {

  const [searchQuery,setSearchQuery] = useState("");
  const [userSearchResults,setUserSearchResults] = useState([]);
  const [challengeSearchResults,setChallengeSearchResults] = useState([]);
  const [postContent,setPostContent] = useState([]);

  const submit = () => {
    const submission = {
      sourceUser: GLOBAL.USERNAME,
      terms: searchQuery.split(" ")
    };
    postMethodFetch(submission, "/post/search", (res) => {
      setUserSearchResults(res[0].data);
      setChallengeSearchResults(res[2].data);

      // render posts
      let refArgs = res[1].data.map(item => item).join("+");
      if (refArgs.length !== 0) {
	fetch(`${DOMAIN_NAME}/api/photo/${refArgs}`)
	.then(res => res.json())
	.then(data => {
	  console.log("SEARCH");
	  console.log(data);
	  setPostContent(data);
	});
      }
    });
  };

  const updateData = (activity) => {
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<TextSubmit placeholder="Users, hashtags, challenges..." buttonText="Search" onChangeText={setSearchQuery} onSubmit={submit} />
	{userSearchResults.length > 0 ? <Text style={styles.resultsHeader}>User Profiles</Text> : null}
	{userSearchResults.map(user => (
	  <ProfileCard username={user} navigation={navigation} />
	))}
	{challengeSearchResults.length > 0 ? <Text style={styles.resultsHeader}>Challenges</Text> : null}
	{challengeSearchResults.map(challenge => (
	  <Text>{post}</Text>
	))}
	{postContent.length > 0 ? <Text style={styles.resultsHeader}>Posts</Text> : null}
	{postContent.map(item => (
	  <Post navigation={navigation} data={item}/>
	))}
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    flex: 1
  },
  resultsHeader: {
    fontSize: TEXT_SIZE,
    color: "white",
    backgroundColor: COLOR_PRIMARY,
    marginTop: rem,
    padding: 0.2 * rem,
    paddingLeft: 0.9 * rem,
    paddingRight: 0.9 * rem,
    borderRadius: 2 *  rem
  }
});

export default Search;
