import { Dimensions } from "react-native";

export const DOMAIN_NAME = "http://46.101.88.105";

export let width = Dimensions.get("window").width;
export let height = Dimensions.get("window").height;

export let rem = Math.floor(width / 24);

export const containerStyle = {
  margin: "auto",
  width: 0.9 * width,
};

export const appBodyStyle = {
  position: "absolute",
  width: "100%",
  height: "100%"
};

export const scrollViewStyle = {
  backgroundColor: "white",
  height: height - 12 * rem,
  padding: 0.5 * rem
};
