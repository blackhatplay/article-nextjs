import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import server from "../api/server";
import ArticleRenderer from "../components/ArticleRenderer";
import Layout from "../components/Layout";

const Post = ({ data }) => {
  const router = useRouter();
  const query = router.query.pid;
  const [state, setState] = useState({});

  if (!data) {
    useEffect(() => {
      server
        .get(`/post/${query}`)
        .then((res) => {
          if (Object.keys(res.data).length > 0) {
            setState(res.data);
          }
        })
        .catch((err) => console.log(err));
    }, [query]);
  }

  let content = null;

  if (Object.keys(data).length > 0) {
    content = <ArticleRenderer article={data ? data : state} />;
  } else {
    content = <h1 className="not-found">404 Not Found!</h1>;
  }

  return content;
};

export async function getServerSideProps(context) {
  const res = await server.get(`/post/${context.query.pid}`);

  const data = res.data;
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Post;
