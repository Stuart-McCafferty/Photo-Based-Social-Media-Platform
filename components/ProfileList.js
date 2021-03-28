import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProfileCard from "./ProfileCard";
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle } from "../global-variables";
import GLOBAL from "../GLOBAL";
import { postMethodFetch } from "../functions";

function ProfileList(props) {

  const [username,setUsername] = useState(props.route.params ? props.route.params.username : username || props.username || GLOBAL.USERNAME);
  const [data,setData] = useState([]);

  useEffect(() => {
    const submission = {
      username,
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    };
    if (props.route.params.api) {
      fetch(`${DOMAIN_NAME}/api/${props.route.params.api}/${username}`)
      .then(res => res.json())
      .then(data => setData(data));
    }
  }, []);

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	{data.map(item => <ProfileCard username={item} navigation={props.navigation} />)}
      </ScrollView>
    </View>
  );

}

export default ProfileList;
