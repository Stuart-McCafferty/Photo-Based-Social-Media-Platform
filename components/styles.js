import { rem } from "../global-variables";

export const SMALL_TEXT_SIZE = 0.8 * rem;
export const TEXT_SIZE = rem;

export const COLOR_LIGHT_GRAY = "#ccc";

export const flexbox = {
  display: "flex",
  flexDirection: "row"
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

export const button = {
  flex: 1,
  fontSize: TEXT_SIZE,
  backgroundColor: COLOR_LIGHT_GRAY,
  borderRadius: 0.2 * rem
};
