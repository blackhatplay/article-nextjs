import Head from "next/head";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions/articleActions";
import { useEffect } from "react";
import server from "../../api/server";
import { wrapper, State } from "../../redux/store";
import serverAuth from "../../utils/serverAuth";
import { useRouter } from "next/router";

const index = ({ isLoggedIn, user, articles, fetchArticles }) => {
  const router = useRouter();

  const hasWindow = typeof window !== "undefined";

  return (
    <Layout>
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
  return serverAuth(context, "/login");
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchArticles })(index);
