import server from "../../api/server";
import useLocalStorage from "../../utils/useLocalStorage";
import jwt_decode from "jwt-decode";
import { LOGIN_SUCCESS, LOGOUT } from "../types";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import setAuthToken from "../../utils/setAuthToken";

export const login = (data) => async (dispatch) => {
  try {
    const response = await server.post("/auth/login", {
      user: data.user,
      password: data.password,
    });

    const user = response.data;
    console.log(user);

    const token = user.token;

    if (token) {
      const decoded = jwt_decode(token);
      setCookie(null, "articleUtoken", token, {
        maxAge: 3600,
        path: "/",
      });
      setAuthToken(token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: decoded,
      });
      return token;
    }

    console.log(user);
  } catch (err) {
    throw err.response.data;
  }
};

export const logout = (clear) => {
  clear("article-utoken");
  setAuthToken();
  destroyCookie(null, "articleUtoken");
  return {
    type: LOGOUT,
  };
};
