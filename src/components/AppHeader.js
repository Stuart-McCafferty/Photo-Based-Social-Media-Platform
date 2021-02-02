import React from 'react';
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

const headerWidth = '100%';

export default class AppHeader extends React.Component {

    render() {
      return (
    <Header
      backgroundColor="#00555e"
      backgroundImageStyle={{}}
      barStyle="default"
      containerStyle={{ width: headerWidth }}
      leftComponent={{
        icon: "chevron-left",
        color: "#fff"
      }}
      placement="center"
      rightComponent={{ icon: "cog", color: "#fff" }}
    />
      )
    }
}