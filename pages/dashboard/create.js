import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
import customServerAuth from "../../utils/customServerAuth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { createUserPost } from "../../redux/actions/dashboardActions";

const create = ({ isLoggedIn, user }) => {
  const router = useRouter();
  const EditorJS = dynamic(() => import("../../components/Editor"), {
    ssr: false,
  });

  const hasWindow = typeof window !== "undefined";

  return (
    <Layout isLoggedIn={isLoggedIn} user={user}>
      <EditorJS action={createUserPost} />
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
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default create;
