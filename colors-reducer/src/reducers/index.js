const initialState = {
  color: "black",
  personalInfo: {},
};

export const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_RED":
      return {
        ...state,
        color: "white",
        background: "red",
      };
    case "CHANGE_BLUE":
      return {
        ...state,
        color: "blue",
        background: "orange",
      };
    case "CHANGE_HOTPINK":
      return {
        ...state,
        color: "hotpink",
        background: "gray",
        fontStyle: "italic",
      };
    case "GET_FORM":
      return {
        ...state,
        personalInfo: action.payload,
      };
    default:
      return state;
  }
};
