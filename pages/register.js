import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import React, { useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import customServerAuth from "../utils/customServerAuth";
import registerValidate from "../validations/registerValidate";
import { register as registerAction } from "../redux/actions/authActions";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "100%",
  },
  wrapper: {
    marginTop: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    maxWidth: "500px",
    padding: "1rem 2rem",
    margin: "0 1rem",
    background: "#2d2d38",
    borderRadius: "5px",
    "& .MuiFormHelperText-root": {
      color: "#f44336",
    },
  },
  button: {
    marginTop: "1rem",
  },
  label: {
    color: "#ccc!important",
  },
  input: {
    fontSize: "1.2rem!important",
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
    fontSize: "1rem",

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
  const router = useRouter();
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

  const [errors, setError] = useState({});

  const handleClickShowPassword = (prop) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onClick = (e) => {
    e.preventDefault();
    const { errors, isValid } = registerValidate(values);
    setError(errors);
    if (!isValid) {
      return;
    }
    registerAction(values)
      .then((res) => {
        if (res.success) router.push("/confirmation");
        console.log(res);
      })
      .catch((err) => setError(err));
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
            />
            {errors.firstname && (
              <FormHelperText id="component-error-text">
                {errors.firstname}
              </FormHelperText>
            )}
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
            />
            {errors.lsatname && (
              <FormHelperText id="component-error-text">
                {errors.lsatname}
              </FormHelperText>
            )}
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
            {errors.username && (
              <FormHelperText id="component-error-text">
                {errors.username}
              </FormHelperText>
            )}
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
                  <EmailIcon color="secondary" />
                </InputAdornment>
              }
            />
            {errors.email && (
              <FormHelperText id="component-error-text">
                {errors.email}
              </FormHelperText>
            )}
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
            {errors.password && (
              <FormHelperText id="component-error-text">
                {errors.password}
              </FormHelperText>
            )}
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
            {errors.password2 && (
              <FormHelperText id="component-error-text">
                {errors.password2}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.button}
            onClick={onClick}
            type="submit"
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

export default register;
