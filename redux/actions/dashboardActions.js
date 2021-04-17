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

export const delelteUserPost = (pid) => (dispatch) => {
  server
    .delete(`/post/${pid}`)
    .then((res) => dispatch(fetchUserPosts()))
    .catch((err) => console.log(err));
};

export const createUserPost = (newArticle, router) => {
  server
    .post("/post", newArticle)
    .then((res) => {
      router.push(`/${res.data.urlId}`);
    })
    .catch((err) => console.log(err));
};

export const editUserPost = (article, router) => {
  server
    .post("/post/edit", article)
    .then((res) => {
      router.push(`/${res.data.urlId}`);
    })
    .catch((err) => console.log(err));
};
