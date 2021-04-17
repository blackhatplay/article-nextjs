import React from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
import serverAuth from "../../utils/serverAuth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { createUserPost } from "../../redux/actions/dashboardActions";

const create = ({ isLoggedIn }) => {
  const router = useRouter();
  const EditorJS = dynamic(() => import("../../components/Editor"), {
    ssr: false,
  });

  const hasWindow = typeof window !== "undefined";

  return (
    <Layout>
      <EditorJS action={createUserPost} />
    </Layout>
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

export default connect(mapStateToProps)(create);
