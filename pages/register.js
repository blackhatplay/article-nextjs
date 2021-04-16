import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "100%",
  },
  wrapper: {
    width: "100vw",
    height: `calc(100vh - ${100}px)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    maxWidth: "400px",
    padding: "1rem 2rem",
    margin: "0 1rem",
    background: "#2d2d38",
    borderRadius: "5px",
  },
  button: {
    marginTop: "1rem",
  },
  label: {
    color: "#ccc!important",
  },
  input: {
    borderBottom: "1px solid #fafafa",
  },
  forgot: {
    marginLeft: "auto",

    "& a": {
      color: "#2D5DBA",
      textDecoration: "none",
    },
  },
  forgot: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

    "& a": {
      color: "#2D5DBA",
      textDecoration: "none",
    },
  },
  button: {
    margin: "1rem 0",
  },
}));

const register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    showPassword: false,
    showPassword2: false,
  });

  const handleClickShowPassword = (prop) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Header />
      <Box className={classes.wrapper}>
        <Box className={classes.formWrapper}>
          <FormControl className={`${classes.margin} ${classes.textField}`}>
            <InputLabel
              htmlFor="standard-adornment-firstname"
              className={classes.label}
            >
              Firstname
            </InputLabel>
            <Input
              id="standard-adornment-firstname"
              type="text"
              value={values.firstname}
              onChange={handleChange("firstname")}
              className={classes.input}
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={`${classes.margin} ${classes.textField}`}>
            <InputLabel
              htmlFor="standard-adornment-lastname"
              className={classes.label}
            >
              Lastname
            </InputLabel>
            <Input
              id="standard-adornment-lastname"
              type="text"
              value={values.lastname}
              onChange={handleChange("lastname")}
              className={classes.input}
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={`${classes.margin} ${classes.textField}`}>
            <InputLabel
              htmlFor="standard-adornment-username"
              className={classes.label}
            >
              Username
            </InputLabel>
            <Input
              id="standard-adornment-username"
              type="text"
              value={values.username}
              autoComplete="new-username"
              onChange={handleChange("username")}
              className={classes.input}
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={`${classes.margin} ${classes.textField}`}>
            <InputLabel
              htmlFor="standard-adornment-email"
              className={classes.label}
            >
              email
            </InputLabel>
            <Input
              id="standard-adornment-email"
              type="email"
              value={values.email}
              autoComplete="new-email"
              onChange={handleChange("email")}
              className={classes.input}
              endAdornment={
                <InputAdornment position="start">
                  <AccountCircle color="secondary" />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className={`${classes.margin} ${classes.textField}`}>
            <InputLabel
              htmlFor="standard-adornment-password"
              className={classes.label}
            >
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              autoComplete="new-password"
              className={classes.input}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <Visibility color="secondary" />
                    ) : (
                      <VisibilityOff color="secondary" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className={`${classes.margin} ${classes.textField}`}>
            <InputLabel
              htmlFor="standard-adornment-password2"
              className={classes.label}
            >
              Confirm Password
            </InputLabel>
            <Input
              id="standard-adornment-password2"
              type={values.showPassword2 ? "text" : "password"}
              value={values.password2}
              className={classes.input}
              onChange={handleChange("password2")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword2")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword2 ? (
                      <Visibility color="secondary" />
                    ) : (
                      <VisibilityOff color="secondary" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.button}
          >
            Register
          </Button>
          <div className={classes.forgot}>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="/forgot-password">
              <a>Forgot Password</a>
            </Link>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default register;
