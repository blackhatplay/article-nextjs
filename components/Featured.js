import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  showcase: {
    cursor: "pointer",
    padding: "1rem 0",
    textDecoration: "none",
    "& .MuiTypography-root": {
      color: "#ccc",
    },
  },
  featuredImg: {
    "& img": {
      maxHeight: "300px",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
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

const Featured = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      <Typography variant="h6">Featured Post</Typography>
      <Link href="/being-unique-is-better-than-being-perfect-dd5oma6p4ar">
        <a
          // onClick={(e) => {
          //   router.push("/being-unique-is-better-than-being-perfect-dd5oma6p4ar");
          // }}
          className={classes.showcase}
        >
          <div className={classes.featuredImg}>
            <img src="https://source.unsplash.com/gySMaocSdqs/500x500"></img>
          </div>
          <div>
            <Typography variant="h4">Storen Technologies</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quas, obcaecati fuga incidunt dicta numquam, repellendus
              perspiciatis soluta, rem atque debitis iusto. Magni perferendis.
            </Typography>
          </div>
        </a>
      </Link>
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
    </>
  );
};

export default Featured;
