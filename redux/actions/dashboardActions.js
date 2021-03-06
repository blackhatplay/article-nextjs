import server from "../../api/server";
import { USER_POSTS } from "../types";

export const fetchUserPosts = () => (dispatch) => {
  server
    .get("/api/post/user")
    .then((articles) => {
      dispatch({
        type: USER_POSTS,
        payload: articles.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchUserPostsOnServer = (cookie) => {
  return server
    .get(`${process.env.NEXT_PUBLIC_SERVER}/api/post/user`, {
      headers: {
        cookie: `articleStoken=${cookie}`,
      },
    })
    .then((articles) => {
      return articles;
    })
    .catch((err) => console.log(err));
};

export const delelteUserPost = (pid) => {
  return server
    .delete(`/api/post/${pid}`)
    .then((res) => console.log("pp"))
    .catch((err) => console.log(err));
};

export const createUserPost = (newArticle, router) => {
  console.log(newArticle);
  server
    .post("/api/post", newArticle)
    .then((res) => {
      router.push(`/${res.data.urlId}`);
    })
    .catch((err) => console.log(err));
};

export const editUserPost = (article, router) => {
  server
    .post("/api/post/edit", article)
    .then((res) => {
      router.push(`/${res.data.urlId}`);
    })
    .catch((err) => console.log(err));
};
