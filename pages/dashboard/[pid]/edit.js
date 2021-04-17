import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../../components/Layout";
import serverAuth from "../../../utils/serverAuth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import server from "../../../api/server";
import { useEffect, useState } from "react";
import { editUserPost } from "../../../redux/actions/dashboardActions";

const edit = ({ isLoggedIn }) => {
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
    <Layout>{state && <EditorJS data={state} action={editUserPost} />}</Layout>
  );
};

export async function getServerSideProps(context) {
  return serverAuth(context, "/login");
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps)(edit);
