import { rem } from "../global-variables";

export const EXTRA_SMALL_TEXT_SIZE = 0.8 * 0.8 * rem;
export const SMALL_TEXT_SIZE = 0.8 * rem;
export const TEXT_SIZE = rem;
export const LARGE_TEXT_SIZE = 1.25 * rem;
export const EXTRA_LARGE_TEXT_SIZE = 1.25 * 1.25 * rem;

export const COLOR_PRIMARY = "#56db4f";
export const COLOR_PRIMARY_COMPLEMENT = "#4ae86c";
export const COLOR_CYAN = "#57b0ba";
export const COLOR_LIGHT_GRAY = "#ccc";
export const COLOR_EXTRA_LIGHT_GRAY = "#eee";

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

export const logoStyle = {
  fontSize: 3 * rem,
  color: COLOR_PRIMARY,
  textAlign: "center",
  backgroundColor: "white"
}

export const buttonStyle = {
  flex: 1,
  backgroundColor: COLOR_PRIMARY_COMPLEMENT,
  padding: 0.2 * rem
};
