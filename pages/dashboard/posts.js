import React from "react";
import Layout from "../../components/Layout";
import customServerAuth from "../../utils/customServerAuth";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { fetchUserPosts } from "../../redux/actions/dashboardActions";
import { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import InfoCard from "../../components/InfoCard";
import DashboardPostList from "../../components/DashboardPostList";

const useStyles = makeStyles((theme) => ({
  sideBarList: {
    padding: "1rem 0",
  },
}));

const posts = ({ isLoggedIn, userPosts, fetchUserPosts }) => {
  const classes = useStyles();
  const hasWindow = typeof window !== "undefined";
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      fetchUserPosts();
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item md={8}>
            <Typography variant="h6">Your Published Posts</Typography>
            <Box>
              {userPosts.map((post) => (
                <DashboardPostList key={post.urlId} post={post} />
              ))}
            </Box>
          </Grid>
          <Grid item lg={4}>
            <div>
              <Box className={classes.sideBarList}>
                <InfoCard />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { auth, user } = customServerAuth(context, "/login");

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
    userPosts: state.dashboard.userPosts,
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchUserPosts })(posts);
