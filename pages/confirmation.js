import React from "react";
import server from "../api/server";
import Header from "../components/Header";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles({
  wrapper: {
    margin: "0 2rem",
    "& a": {
      textDecoration: "none",
    },
  },
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: "5rem auto",

    background: "#2d2d38",
  },
  button: {
    marginTop: "1rem",
  },
});

const confirmation = ({ isConfirmed, message, type }) => {
  const classes = useStyles();

  if (type && type === "token" && isConfirmed) {
    return (
      <>
        <Header />

        <Box className={classes.wrapper}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="h5" component="h2">
                    {message}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" component="p">
                Thank you! for verification, you can login below.
              </Typography>
              <Link href="/login">
                <a>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Login
                  </Button>
                </a>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }

  if (type && type === "token" && !isConfirmed) {
    return (
      <>
        <Header />

        <Box className={classes.wrapper}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="h5" component="h2">
                    {message}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" component="p">
                You can login below.
              </Typography>
              <Link href="/login">
                <a>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Login
                  </Button>
                </a>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }

  return (
    <>
      <Header />

      <Box className={classes.wrapper}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="h5" component="h2">
                  Confirmation email sent!
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" component="p">
              Please, Check you email inbox or spam for confirmation email.
              After verification click below.
            </Typography>
            <Link href="/login" passHref>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disableElevation
              >
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  let res = {
    isConfirmed: false,
    message: "Invalid Link",
  };
  if (token) {
    res = await server
      .get(`${process.env.NEXT_PUBLIC_SERVER}/api/auth/confirmation/${token}`)
      .then((res) => {
        return {
          isConfirmed: true,
          ...res.data,
          type: "token",
        };
      })
      .catch((err) => {
        return {
          isConfirmed: false,
          ...err.response.data,
          type: "token",
        };
      });
  }

  return {
    props: res,
  };
}

export default confirmation;
