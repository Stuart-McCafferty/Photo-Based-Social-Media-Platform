import { Dimensions } from "react-native";

const USE_LOCAL = false;
export const DEV_MODE = true;
export const DOMAIN_NAME = USE_LOCAL ? "http://localhost:5000" : "http://46.101.88.105";

export let width = Dimensions.get("window").width;
export let height = Dimensions.get("window").height;

export let rem = Math.floor(width / 24);
export const CONTAINER_WIDTH = 0.9 * width;

export const containerStyle = {
  margin: "auto",
  width: CONTAINER_WIDTH,
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
