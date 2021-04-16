import { LOGIN_SUCCESS, LOGOUT } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
