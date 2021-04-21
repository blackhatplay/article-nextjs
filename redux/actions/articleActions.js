import server from "../../api/server";
import { USER_POSTS } from "../types";

export const fetchArticles = () => (dispatch) => {
  server
    .get("/api/post/all")
    .then((articles) => {
      dispatch({
        type: "all",
        payload: articles.data,
      });
    })
    .catch((err) => console.log(err));
};
