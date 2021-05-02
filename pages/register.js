import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Container,
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
import Left from "../components/Left";
import Right from "../components/Right";

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

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Header />
      <Container maxWidth="md">
        <Grid container component="form">
          <Left
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            values={values}
            errors={errors}
            onClick={onClick}
          />
          <Right />
        </Grid>
      </Container>
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
