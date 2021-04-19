import server from "../../api/server";
import useLocalStorage from "../../utils/useLocalStorage";
import jwt_decode from "jwt-decode";
import { LOGIN_SUCCESS, LOGOUT } from "../types";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import setAuthToken from "../../utils/setAuthToken";

export const login = async (data) => {
  try {
    const response = await server.post("/auth/login", {
      user: data.user,
      password: data.password,
    });

    const user = response.data;
    console.log(user);

    const token = user.token;

    if (token) {
      // const decoded = jwt_decode(token);
      // setCookie(null, "articleUtoken", token, {
      //   maxAge: 3600,
      //   path: "/",
      // });
      // setAuthToken(token);
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: decoded,
      // });
      return token;
    }

    console.log(user);
  } catch (err) {
    throw err.response.data;
  }
};

export const register = async (data) => {
  try {
    const response = await server.post("/auth/register", {
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
      password: data.password,
      password2: data.password2,
    });

    const res = response.data;

    return res;
  } catch (err) {
    throw err.response.data;
  }
};

export const logout = (clear) => {
  clear("article-utoken");
  // setAuthToken();
  // destroyCookie(null, "articleUtoken", {
  //   path: "/",
  // });
  return server
    .delete("/auth/clearCookie")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const sendResetLink = (email) => {
  return server
    .post("/auth/forgot-password", { email })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const resetPassword = ({ password, password2, token }) => {
  return server
    .post(`/auth/reset-password/${token}`, { password, password2 })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};
