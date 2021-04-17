import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../../components/Layout";
import customServerAuth from "../../../utils/customServerAuth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import server from "../../../api/server";
import { useEffect, useState } from "react";
import { editUserPost } from "../../../redux/actions/dashboardActions";

const edit = ({ isLoggedIn, user }) => {
  const [state, setState] = useState();
  const router = useRouter();
  const EditorJS = dynamic(() => import("../../../components/Editor"), {
    ssr: false,
  });

  useEffect(() => {
    server
      .get(`/post/${router.query.pid}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout isLoggedIn={isLoggedIn} user={user}>
      {state && <EditorJS data={state} action={editUserPost} />}
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

export default edit;
