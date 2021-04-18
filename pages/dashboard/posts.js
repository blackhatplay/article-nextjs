import React from "react";
import Layout from "../../components/Layout";
import customServerAuth from "../../utils/customServerAuth";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  fetchUserPosts,
  fetchUserPostsOnServer,
} from "../../redux/actions/dashboardActions";
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
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  sideBarList: {
    padding: "2rem 0",
  },
}));

const posts = ({ isLoggedIn, userPosts, user }) => {
  const classes = useStyles();
  const hasWindow = typeof window !== "undefined";
  const router = useRouter();
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     fetchUserPosts();
  //   }
  // }, [isLoggedIn]);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <Layout user={user} isLoggedIn={isLoggedIn}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item md={8}>
            <Typography variant="h6">Your Published Posts</Typography>
            <Box>
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <DashboardPostList
                    key={post.urlId}
                    post={post}
                    refreshData={refreshData}
                  />
                ))
              ) : (
                <InfoCard
                  title="No Post yet"
                  body="You dont have any post at the moment. Create you first post right now!"
                  hrefText="Write a Post"
                  href="/dashboard/create"
                />
              )}
            </Box>
          </Grid>
          <Grid item md={4}>
            <div>
              <Box className={classes.sideBarList}>
                <InfoCard
                  body=" Start saving stories by clicking the bookmark icon and you’ll find
          them all here."
                  title="Bookmark stories for later"
                  icon={<BookmarkBorderIcon />}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
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
    const posts = await fetchUserPostsOnServer(cookie);

    const userPosts = await posts.data;

    return {
      props: {
        isLoggedIn: true,
        user,
        userPosts,
      },
    };
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.user.isLoggedIn,
//     user: state.user,
//   };
// };

export default posts;
