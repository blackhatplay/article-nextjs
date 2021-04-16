import server from "../../api/server";
import { USER_POSTS } from "../types";

export const fetchArticles = () => (dispatch) => {
  server
    .get("http://localhost:4000/post/all")
    .then((articles) => {
      dispatch({
        type: "all",
        payload: articles.data,
      });
    })
    .catch((err) => console.log(err));
};
