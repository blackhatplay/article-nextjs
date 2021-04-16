import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  sidePostList: {
    padding: "1rem 0",
  },
  sidePostListItem: {
    cursor: "pointer",
    marginBottom: "0.5rem",
    "& .img-wrapper img": {
      borderTopRightRadius: "5px",
      borderBottomLeftRadius: "5px",
    },
  },

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
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const SideList = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid item lg={4}>
      <div>
        <Typography variant="h6">Most Favourites</Typography>
        <Box className={classes.sidePostList}>
          <Grid
            container
            className={classes.sidePostListItem}
            spacing={2}
            alignItems="center"
            onClick={(e) => {
              router.push(
                "/being-unique-is-better-than-being-perfect-dd5oma6p4ar"
              );
            }}
          >
            <Grid item md={5}>
              <div className="img-wrapper">
                <img src="https://source.unsplash.com/v9FQR4tbIq8/250x150" />
              </div>
            </Grid>
            <Grid item md={7}>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur Nemo,
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
          <Grid container className={classes.sidePostListItem} spacing={2}>
            <Grid item md={5}>
              <div className="img-wrapper">
                <img src="https://source.unsplash.com/aIND4ATg-e4/250x150" />
              </div>
            </Grid>
            <Grid item md={7}>
              <Typography variant="body1">
                Onteractive Product Designer
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
          <Grid container className={classes.sidePostListItem} spacing={2}>
            <Grid item md={5}>
              <div className="img-wrapper">
                <img src="https://source.unsplash.com/BVoTTLwXvMQ/250x150" />
              </div>
            </Grid>
            <Grid item md={7}>
              <Typography variant="body1">
                Better than nothing, sit amet consectetur Nemo
              </Typography>
              <div className={classes.info}>
                <Link href="/login">
                  <a className={classes.a} onClick={(e) => e.stopPropagation()}>
                    by <span>Blackhat</span>
                  </a>
                </Link>
                <Typography variant="body2">20/02/2021</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container className={classes.sidePostListItem} spacing={2}>
            <Grid item md={5}>
              <div className="img-wrapper">
                <img src="https://source.unsplash.com/RIwrABKvT3k/250x150" />
              </div>
            </Grid>
            <Grid item md={7}>
              <Typography variant="body1">men play laptop, ipsa!</Typography>
              <div className={classes.info}>
                <Link href="/login">
                  <a className={classes.a} onClick={(e) => e.stopPropagation()}>
                    by <span>Blackhat</span>
                  </a>
                </Link>
                <Typography variant="body2">20/02/2021</Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};

export default SideList;
