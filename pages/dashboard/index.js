import Head from "next/head";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions/articleActions";
import { useEffect } from "react";
import server from "../../api/server";
import { wrapper, State } from "../../redux/store";
import customServerAuth from "../../utils/customServerAuth";
import { useRouter } from "next/router";

const index = ({ isLoggedIn, user }) => {
  const router = useRouter();

  const hasWindow = typeof window !== "undefined";

  return (
    <Layout user={user} isLoggedIn={isLoggedIn}>
      <div>
        <Head>
          <title>Dashboard</title>
        </Head>
        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { auth, user, cookie } = customServerAuth(context, "/login");

  if (!auth) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        isLoggedIn: true,
        user,
      },
    };
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default index;
