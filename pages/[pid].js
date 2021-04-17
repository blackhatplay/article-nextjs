import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import server from "../api/server";
import ArticleRenderer from "../components/ArticleRenderer";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Post = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const query = router.query.pid;
  const [state, setState] = useState({});

  let content = null;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (Object.keys(data).length > 0) {
    content = <ArticleRenderer article={data} />;
  } else {
    content = <h1 className="not-found">404 Not Found!</h1>;
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
};

// export async function getServerSideProps(context) {
//   const res = await server.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/post/${context.query.pid}`
//   );

//   const data = res.data;
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: [
      {
        params: {
          pid: "being-unique-is-better-than-being-perfect-dd5oma6p4ar",
        },
      },
    ],
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  try {
    const res = await server.get(
      `http://localhost:4000/api/post/${params.pid}`
    );

    const data = await res.data;
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    // Pass post data to the page via props
    return { props: { data } };
  } catch (err) {
    return { props: { data: {} } };
  }
}

export default Post;
