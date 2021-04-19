import React from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { sendResetLink } from "../redux/actions/authActions";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
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
    "& .MuiFormHelperText-root": {
      color: "#f44336",
    },
  },
  button: {
    marginTop: "1rem",
  },
  textField: {
    width: "100%",
  },
  margin: {
    margin: `${theme.spacing(1)}px 0`,
  },
  button: {
    margin: "1rem 0",
  },
  label: {
    color: "#ccc!important",
  },
  input: {
    borderBottom: "1px solid #fafafa",
    fontSize: "1.2rem!important",
    "&:-webkit-autofill": {
      color: "#fafafa!important",
    },
  },
}));

const forgotPassword = () => {
  const classes = useStyles();
  const router = useRouter();
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const onClick = () => {
    sendResetLink(email)
      .then((res) => {
        if (res.success) {
          router.push("/reset-password");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  return (
    <>
      <Header />

      <Box className={classes.wrapper}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="h5" component="h2">
                  Forgot Password
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" component="p">
              No Problem! Enter your email below and we will send you an email
              with instruction to reset your password.
            </Typography>
            <FormControl className={`${classes.margin} ${classes.textField}`}>
              <InputLabel
                htmlFor="standard-adornment-user"
                className={classes.label}
              >
                Email
              </InputLabel>
              <Input
                id="standard-adornment-user"
                type="text"
                value={email}
                onChange={handleChange}
                className={classes.input}
              />
              {error.message && (
                <FormHelperText id="component-error-text">
                  {error.message}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableElevation
              onClick={onClick}
            >
              Sent Reset Link
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default forgotPassword;
