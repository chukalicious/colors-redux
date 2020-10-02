const initialState = {
  color: "black",
};

export const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_RED":
      return {
        ...state,
        color: "red",
      };
    case "CHANGE_BLUE":
      return {
        ...state,
        color: "blue",
      };
    case "CHANGE_HOTPINK":
      return {
        ...state,
        color: "hotpink",
      };
    default:
      return state;
  }
};
