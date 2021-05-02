import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    padding: "5rem 2rem",
    backgroundColor: "#2B2D38",
  },
  imgThumb: {
    "& img": {
      borderRadius: "50%",
      marginRight: "1rem",
    },
  },
  sideCard: {
    margin: "1rem 0",
  },
});

const Right = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={5} className={classes.root}>
        {/* <Typography variant="caption">Share</Typography>
        <div>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div> */}
        {/* <Typography variant="h5">Guests</Typography>
        <Grid container className={classes.sideCard}>
          <Grid item className={classes.imgThumb}>
            <img src="https://source.unsplash.com/c_GmwfHBDzk/60x60" alt="" />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6">Lisa Alvin</Typography>
            <Typography>Cofounder, Jea</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.sideCard}>
          <Grid item className={classes.imgThumb}>
            <img src="https://source.unsplash.com/rDEOVtE7vOs/60x60" alt="" />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6">Jenny Pick</Typography>
            <Typography>Head of Education, Jea </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.sideCard}>
          <Grid item className={classes.imgThumb}>
            <img src="https://source.unsplash.com/15Vb4B_ma_s/60x60" alt="" />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6">Peter Scott</Typography>
            <Typography>Founder, Jea </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5">Hosted By</Typography>
        <Grid container className={classes.sideCard}>
          <Grid item className={classes.imgThumb}>
            <img src="https://source.unsplash.com/rDEOVtE7vOs/60x60" alt="" />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h6">Josh Jacob</Typography>
            <Typography>Educator, Web</Typography>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Right;
