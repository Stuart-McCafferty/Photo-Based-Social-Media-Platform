import { rem } from "../global-variables";

export const EXTRA_SMALL_TEXT_SIZE = 0.8 * 0.8 * rem;
export const SMALL_TEXT_SIZE = 0.8 * rem;
export const TEXT_SIZE = rem;
export const LARGE_TEXT_SIZE = 1.25 * rem;
export const EXTRA_LARGE_TEXT_SIZE = 1.25 * 1.25 * rem;

export const COLOR_PRIMARY = "#28865C";
export const COLOR_PRIMARY_COMPLEMENT = "#57bd8e";
export const COLOR_ERROR = "#ff4a4a";
export const COLOR_CYAN = "#35b2ba";
export const COLOR_LIGHT_GRAY = "#ccc";
export const COLOR_EXTRA_LIGHT_GRAY = "#eee";
export const COLOR_PURPLE = "#e339e3";

export const flexbox = {
  display: "flex",
  flexDirection: "row"
};

export const textInputStyle = {
  fontSize: SMALL_TEXT_SIZE,
  marginBottom: 0.2 * rem,
  backgroundColor: COLOR_EXTRA_LIGHT_GRAY,
  borderColor: COLOR_LIGHT_GRAY,
  borderStyle: "solid",
  borderWidth: 1
};

export const text = {
  fontSize: rem
};

export const textLarge = {
  fontSize: 1.5 * rem
};

export const textSmall = {
  fontSize: SMALL_TEXT_SIZE
};

export const textExtraSmall = {
  fontSize: EXTRA_SMALL_TEXT_SIZE
};

export const logoStyle = {
  fontSize: 4 * rem,
  color: COLOR_PRIMARY,
  textAlign: "center",
  backgroundColor: "white",
  marginTop: 4 * rem,
  marginBottom: rem
}

export const buttonStyle = {
  backgroundColor: COLOR_PRIMARY_COMPLEMENT,
  color: "white",
  padding: 0.2 * rem,
  paddingLeft: 0.4 * rem,
  paddingRight: 0.4 * rem,
  textAlign: "center"
};

export const errorStyle = {
  backgroundColor: COLOR_ERROR,
  color: "white",
  padding: 0.4 * rem,
  borderRadius: 0.4 * rem
};
