import { USER_POSTS } from "../types";

const initState = { userPosts: [] };

export const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    default:
      return state;
  }
};
