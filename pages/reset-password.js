import React from "react";
import server from "../api/server";
import Header from "../components/Header";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import { resetPassword as resetPasswordAction } from "../redux/actions/authActions";
import { Visibility, VisibilityOff } from "@material-ui/icons";
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

const resetPassword = ({ isReset, message, type, success }) => {
  const classes = useStyles();
  const router = useRouter();

  const [values, setValues] = useState({
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

  const onClick = () => {
    const token = router.query.token;
    resetPasswordAction({
      password: values.password,
      password2: values.password2,
      token,
    })
      .then((res) => {
        if (res.success) {
          router.push("/reset-password?success=true");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  if (success) {
    return (
      <>
        <Header />

        <Box className={classes.wrapper}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="h5" component="h2">
                    Password Changed!
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" component="p">
                You can login bellow!
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
  }

  if (type && type === "token" && isReset) {
    return (
      <>
        <Header />

        <Box className={classes.wrapper}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="h5" component="h2">
                    Reset Password
                  </Typography>
                </Grid>
              </Grid>
              <FormControl className={`${classes.margin} ${classes.textField}`}>
                <InputLabel
                  htmlFor="standard-adornment-password"
                  className={classes.label}
                >
                  New password
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
                className={classes.button}
                variant="contained"
                color="primary"
                disableElevation
                onClick={onClick}
              >
                Change Password
              </Button>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }

  if (type && type === "token" && !isReset) {
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
                  Reset password email sent!
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" component="p">
              Please, Check you email inbox or spam for the reset email.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {
  const { token, success } = context.query;

  if (success && Boolean(success) === true) {
    return {
      props: { success: true },
    };
  }

  let res = {
    isReset: false,
    message: "Invalid Link",
  };
  if (token) {
    res = await server
      .post(
        `${process.env.NEXT_PUBLIC_SERVER}/api/auth/verifyForgotToken/${token}`
      )
      .then((res) => {
        return {
          isReset: true,
          ...res.data,
          type: "token",
        };
      })
      .catch((err) => {
        console.log(err.response.data);
        return {
          isReset: false,
          ...err.response.data,
          type: "token",
        };
      });
  }

  return {
    props: res,
  };
}

export default resetPassword;
