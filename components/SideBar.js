import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import InfoCard from "./InfoCard";
import ToFollow from "./ToFollow";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  sideBarList: {
    padding: "1rem 0",
  },

  a: {
    color: "#ccc",
    textDecoration: "none",
    "& span": {
      color: "#fafafa",
      "&:hover": {
        color: "#ccc",
      },
    },
  },
  info: {
    color: "#b9b9b9cc",
    padding: "1rem 0",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const SideBar = ({ title }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid item lg={4}>
      <div>
        <Box className={classes.sideBarList}>
          {title && <Typography variant="h6">{title}</Typography>}
          <InfoCard
            body=" Start saving stories by clicking the bookmark icon and you’ll find
          them all here."
            title="Bookmark stories for later"
            icon={<BookmarkBorderIcon />}
          />
          <ToFollow />
        </Box>
      </div>
    </Grid>
  );
};

export default SideBar;
