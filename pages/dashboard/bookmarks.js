import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import customServerAuth from "../../utils/customServerAuth";

const bookmarks = ({ user, isLoggedIn }) => {
  return (
    <Layout user={user} isLoggedIn={isLoggedIn}>
      <div>
        <Head>
          <title>Bookmarks</title>
        </Head>
        <h1 style={{ textAlign: "center" }}>Bookmarks</h1>
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

export default bookmarks;
