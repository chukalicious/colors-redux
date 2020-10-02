const CHANGE_RED = "CHANGE_RED";
const CHANGE_BLUE = "CHANGE_BLUE";
const CHANGE_HOTPINK = "CHANGE_HOTPINK";

export const colorRed = () => {
  return {
    type: CHANGE_RED,
  };
};

export const colorBlue = () => {
  return {
    type: CHANGE_BLUE,
  };
};

export const colorHotpink = () => {
  return {
    type: CHANGE_HOTPINK,
  };
};
