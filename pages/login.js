import {
  Box,
  Button,
  Collapse,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";

import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import { login as loginAction } from "../redux/actions/authActions";
import { connect } from "react-redux";
import useLocalStorage from "../utils/useLocalStorage";
import { useEffect } from "react";
import { useRouter } from "next/router";
import customServerAuth from "../utils/customServerAuth";

const useStyles = makeStyles((theme) => {
  return {
    margin: {
      margin: `${theme.spacing(1)}px 0`,
    },
    textField: {
      width: "100%",
    },
    wrapper: {
      // width: "100vw",
      margin: "25vh 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formWrapper: {
      maxWidth: "500px",
      padding: "2rem",
      margin: "0 1rem",
      background: "#2d2d38",
      borderRadius: "5px",
      "& input:-webkit-autofill, input:-webkit-autofill:hover,input:-webkit-autofill:focus, input:-webkit-autofill:active": {
        transition: "background-color 5000s ease-in-out 0s",
      },
      "& input:-webkit-autofill": {
        "-webkit-text-fill-color": "#fafafa !important",
      },
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
    forgot: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      fontSize: "1rem",

      "& a": {
        color: "#2D5DBA",
        textDecoration: "none",
      },
    },
    alertWrapper: {
      margin: "0.5rem 0",
      "& .MuiAlert-message": {
        color: "#2D5DBA",
      },
    },
  };
});

const login = ({ isLoggedIn, user }) => {
  const [values, setValues] = useState({
    user: "",
    password: "",
    showPassword: false,
  });

  const [open, setOpen] = useState(false);

  const [error, setError] = useState({});

  const router = useRouter();

  const [token, setToken, clearToken] = useLocalStorage("article-utoken");

  const hasWindow = typeof window !== "undefined";

  if (isLoggedIn && hasWindow) {
    router.push("/dashboard");
  }
  // useEffect(() => {
  // }, [isLoggedIn]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onClick = () => {
    const data = {
      user: values.user,
      password: values.password,
    };

    loginAction(data)
      .then((token) => {
        setToken(token);
        router.push("/dashboard");
      })
      .catch((err) => {
        if (err.verified === false) {
          setError(err);
          setOpen(true);
        }
      });
  };

  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <Box className={classes.wrapper}>
        <Box className={classes.formWrapper}>
          <Box>
            <FormControl className={`${classes.margin} ${classes.textField}`}>
              <InputLabel
                htmlFor="standard-adornment-user"
                className={classes.label}
              >
                Username/Email
              </InputLabel>
              <Input
                id="standard-adornment-user"
                type="text"
                value={values.user}
                onChange={handleChange("user")}
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
                className={classes.input}
                autoComplete="new-password"
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
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
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              disableElevation
              className={classes.button}
              onClick={onClick}
            >
              Login
            </Button>
            <div className={classes.forgot}>
              <Link href="/register">
                <a>Create account</a>
              </Link>
              <Link href="/forgot-password">
                <a>Forgot Password</a>
              </Link>
            </div>
          </Box>
          <Collapse in={open} className={classes.alertWrapper}>
            <Alert
              icon={false}
              // variant="outlined"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {error.message}
            </Alert>
          </Collapse>
        </Box>
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {
  const { auth, user } = customServerAuth(context, "/login");

  if (!auth) {
    return {
      props: {
        isLoggedIn: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default login;
