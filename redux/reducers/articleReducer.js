const articleInitState = [];

export const articleReducer = (state = articleInitState, action) => {
  switch (action.type) {
    case "all":
      return action.payload;
    default:
      return state;
  }
};
