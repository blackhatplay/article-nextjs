import {
  Box,
  CardActionArea,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
import Link from "next/link";

import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import SideList from "../components/SideList";
import MainList from "../components/MainList";
import SideBar from "../components/SideBar";
import customServerAuth from "../utils/customServerAuth";
import server from "../api/server";
import useSWR from "swr";
import isEmpty from "../validations/isEmpty";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1.5rem",
  },

  vl: {
    height: "100%",
    width: "1.5px",
    margin: "auto",
    background: "#212127b5",
    margin: "0 1rem",
  },
  vlWrapper: {
    margin: "1rem 0",
  },

  a: {
    color: "#b9b9b9cc",
    textDecoration: "none",
    "&:hover span": {
      color: "#fafafa",
    },
  },
  info: {
    padding: "1rem 0",
  },
  gridContainer: {
    // borderBottom: "1px solid #212127b5",
  },
}));

const fetcher = async (user) => {
  return await server
    .get(`${process.env.NEXT_PUBLIC_HOST}/api/auth/${user}`)
    .then((res) => {
      return res.data;
    });
};

const index = () => {
  const classes = useStyles();
  const router = useRouter();

  const { data, error } = useSWR("user", fetcher);

  if (data && !error) {
    return (
      <div>
        <Header user={data} isLoggedIn={true} />
        <Container
          maxWidth="lg"
          // spacing={5}
          className={classes.root}
          justify="center"
        >
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item lg={7}>
              <Featured />
            </Grid>
            <Grid item className={classes.vlWrapper}>
              <div className={classes.vl}></div>
            </Grid>
            <SideList />
          </Grid>

          <Grid container spacing={1}>
            <Grid item lg={7}>
              <MainList />
            </Grid>
            <Grid item className={classes.vlWrapper}>
              <div className={classes.vl}></div>
            </Grid>
            <SideBar />
          </Grid>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container
        maxWidth="lg"
        // spacing={5}
        className={classes.root}
        justify="center"
      >
        <Grid container spacing={1} className={classes.gridContainer}>
          <Grid item lg={7}>
            <Featured />
          </Grid>
          <Grid item className={classes.vlWrapper}>
            <div className={classes.vl}></div>
          </Grid>
          <SideList />
        </Grid>

        <Grid container spacing={1}>
          <Grid item lg={7}>
            <MainList />
          </Grid>
          <Grid item className={classes.vlWrapper}>
            <div className={classes.vl}></div>
          </Grid>
          <SideBar />
        </Grid>
      </Container>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { auth, user, cookie } = customServerAuth(context, "/login");
//   if (!auth) {
//     return {
//       props: {},
//     };
//   } else {
//     return {
//       props: {
//         isLoggedIn: true,
//         user,
//       },
//     };
//   }
// }

export default index;
