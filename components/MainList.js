import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  a: {
    color: "#ccc",
    textDecoration: "none",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    "& span": {
      color: "#fafafa",
      "&:hover": {
        color: "#ccc",
      },
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  info: {
    color: "#b9b9b9cc",
    padding: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postItem: {
    // cursor: "pointer",
    margin: "1rem -8px",
    // borderBottom: "1px solid #212127b5",
    // background: "#2d2d38",
  },
  postItemWrapper: {
    margin: "1rem 0",
    "& a": {
      textDecoration: "none",
    },
    "& .MuiTypography-h6": {
      color: "#fafafa",
    },
  },
  title: {},
  body: {
    color: "#ccc",
    fontWeight: "300",
  },
}));

const MainList = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      {/* <Typography variant="h6">Latest Posts</Typography> */}
      <Box className={classes.postItemWrapper}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.postItem}
          // onClick={(e) => {
          //   router.push(
          //     "/being-unique-is-better-than-being-perfect-dd5oma6p4ar"
          //   );
          // }}
        >
          <Grid item md={4}>
            <Link href="/being-unique-is-better-than-being-perfect-dd5oma6p4ar">
              <a>
                <div>
                  <img src="https://source.unsplash.com/ICTKcvnXx_8/250x150" />
                </div>
              </a>
            </Link>
          </Grid>
          <Grid item md={8}>
            <Link href="/being-unique-is-better-than-being-perfect-dd5oma6p4ar">
              <a>
                <Typography variant="h6" className={classes.title}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Obcaecati aspernatur
                </Typography>
                <Typography variant="body2" className={classes.body}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  nulla laboriosam veniam? Ducimus maxime exercitationem dolores
                </Typography>
              </a>
            </Link>
            <div className={classes.info}>
              <Link href="/login">
                <a className={classes.a} onClick={(e) => e.stopPropagation()}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/rDEOVtE7vOs/250x150"
                    className={classes.small}
                  />{" "}
                  <span>Blackhat</span>
                </a>
              </Link>
              <Typography variant="body2">20/02/2021</Typography>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.postItem}
          onClick={(e) => {
            router.push(
              "/being-unique-is-better-than-being-perfect-dd5oma6p4ar"
            );
          }}
        >
          <Grid item md={4}>
            <div>
              <img src="https://source.unsplash.com/p41N-xE5Sh4/250x150" />
            </div>
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati aspernatur placeat
            </Typography>
            <Typography variant="body2" className={classes.body}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              nulla laboriosam veniam? Ducimus maxime exercitationem dolores
            </Typography>
            <div className={classes.info}>
              <Link href="/login">
                <a className={classes.a} onClick={(e) => e.stopPropagation()}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/rDEOVtE7vOs/250x150"
                    className={classes.small}
                  />
                  <span>Blackhat</span>
                </a>
              </Link>
              <Typography variant="body2">20/02/2021</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className={classes.postItem}
          alignItems="center"
          onClick={(e) => {
            router.push(
              "/being-unique-is-better-than-being-perfect-dd5oma6p4ar"
            );
          }}
        >
          <Grid item md={4}>
            <div>
              <img src="https://source.unsplash.com/0hyXL6mJB04/250x150" />
            </div>
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati aspernatur placeat
            </Typography>
            <Typography variant="body2" className={classes.body}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              nulla laboriosam veniam? Ducimus maxime exercitationem dolores
            </Typography>
            <div className={classes.info}>
              <Link href="/login">
                <a className={classes.a} onClick={(e) => e.stopPropagation()}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/rDEOVtE7vOs/250x150"
                    className={classes.small}
                  />
                  <span>Blackhat</span>
                </a>
              </Link>
              <Typography variant="body2">20/02/2021</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainList;
