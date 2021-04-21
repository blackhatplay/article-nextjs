import { useRouter } from "next/router";
import server from "../api/server";
import ArticleRenderer from "../components/ArticleRenderer";
import Header from "../components/Header";
import customServerAuth from "../utils/customServerAuth";
import useSWR from "swr";
import isEmpty from "../validations/isEmpty";

const fetcher = async (user) => {
  return await server.get(`/api/auth/${user}`).then((res) => {
    return res.data;
  });
};

const Post = ({ postData }) => {
  const router = useRouter();
  const pid = router.query.pid;

  const { data, error } = useSWR("user", fetcher, {
    shouldRetryOnError: false,
    errorRetryCount: 2,
  });

  let content = null;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if ((!data || error) && postData && !isEmpty(postData)) {
    return (
      <>
        <Header />
        <ArticleRenderer article={postData} />
      </>
    );
  } else if (data && postData && !isEmpty(postData)) {
    return (
      <>
        <Header user={data} isLoggedIn={true} />
        <ArticleRenderer article={postData} />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <h1 className="not-found">404 Not Found!</h1>;
      </>
    );
  }
};

// export async function getServerSideProps(context) {
//   const { auth, user, cookie } = customServerAuth(context, "/login");

//   const res = await server.get(
//     `${process.env.NEXT_PUBLIC_HOST}/api/post/${context.query.pid}`
//   );

//   const data = res.data;
//   const props = {};
//   props.postData = data;

//   if (auth) {
//     props.user = user;
//     props.isLoggedIn = true;
//   }

//   return {
//     props, // will be passed to the page component as props
//   };
// }

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  try {
    const res = await server.get(
      `${process.env.NEXT_PUBLIC_SERVER}/api/post/all/paths`
    );

    const data = await res.data;

    const paths = data.map((post) => ({
      params: { pid: post.urlId },
    }));

    return { paths, fallback: true };
  } catch (err) {
    console.log(err);
  }
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  try {
    const res = await server.get(
      `${process.env.NEXT_PUBLIC_SERVER}/api/post/${params.pid}`
    );

    const data = await res.data;
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    // Pass post data to the page via props
    if (data) {
      return { props: { postData: data }, revalidate: 1 };
    } else {
      return { props: { postData: {} }, revalidate: 1 };
    }
  } catch (err) {
    return { props: { postData: {} }, revalidate: 1 };
  }
}

export default Post;
