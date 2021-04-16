import server from "../../api/server";
import { USER_POSTS } from "../types";

export const fetchUserPosts = () => (dispatch) => {
  server
    .get("/post/user")
    .then((articles) => {
      dispatch({
        type: USER_POSTS,
        payload: articles.data,
      });
    })
    .catch((err) => console.log(err));
};
