import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  NativeSelect,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import LeftBottom from "./LeftBottom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5rem 0",
    "& .Mui-focused ,.Mui-checked": {
      color: "#ccc",
    },
    "& .MuiFormHelperText-root": {
      color: "#f44336",
    },
  },
  inputGroup: {
    width: "90%",
    "& .MuiInputBase-root": {
      borderBottom: "1px solid #fff",
    },
  },
  formControl: {
    margin: `${theme.spacing(2)}px 0`,
    width: "90%",
  },
  fIcon: {
    color: "#ccc",
  },
}));

const Left = ({
  handleChange,
  values,
  handleClickShowPassword,
  handleMouseDownPassword,
  errors,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <Grid item md={7} className={classes.root}>
      <Typography variant="caption">March 17, 2021 12:00</Typography>
      <Typography variant="h6">
        The help of Augmented Reality and Holograms.
      </Typography>
      <Typography variant="body2">
        Use Augmented Reality to keep students engaged and provide detailed
        explanations of models and course material. In a 3D, AR Lab, students
        can pinch, zoom, and rotate equipment related to the course, for a fully
        immersive learning experienc
      </Typography>
      <Typography variant="h6">Join the creators</Typography>
      <Grid container>
        <Grid item md={6}>
          <TextField
            label="First Name"
            placeholder="Enter your first name"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputGroup}
            onChange={handleChange("firstname")}
          />
          {errors.firstname && (
            <FormHelperText id="component-error-text">
              {errors.firstname}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Last Name"
            placeholder="Enter your last name"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputGroup}
            onChange={handleChange("lastname")}
          />
          {errors.lastname && (
            <FormHelperText id="component-error-text">
              {errors.lastname}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Email"
            placeholder="Enter your email"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputGroup}
            onChange={handleChange("email")}
          />
          {errors.email && (
            <FormHelperText id="component-error-text">
              {errors.email}
            </FormHelperText>
          )}
        </Grid>

        <Grid item md={6}>
          <TextField
            label="Username"
            placeholder="To be username"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputGroup}
            onChange={handleChange("username")}
          />

          {errors.username && (
            <FormHelperText id="component-error-text">
              {errors.username}
            </FormHelperText>
          )}
        </Grid>

        <Grid item md={6}>
          <TextField
            label="Password"
            placeholder="*******"
            margin="normal"
            autoComplete="new-password"
            type={values.showPassword2 ? "text" : "password"}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputGroup}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <Visibility color="secondary" className={classes.fIcon} />
                    ) : (
                      <VisibilityOff
                        color="secondary"
                        className={classes.fIcon}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {errors.password && (
            <FormHelperText id="component-error-text">
              {errors.password}
            </FormHelperText>
          )}
        </Grid>

        <Grid item md={6}>
          <TextField
            label="Confirm Password"
            placeholder="*******"
            margin="normal"
            type={values.showPassword2 ? "text" : "password"}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.inputGroup}
            onChange={handleChange("password2")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword2")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword2 ? (
                      <Visibility color="secondary" className={classes.fIcon} />
                    ) : (
                      <VisibilityOff
                        color="secondary"
                        className={classes.fIcon}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {errors.password2 && (
            <FormHelperText id="component-error-text">
              {errors.password2}
            </FormHelperText>
          )}
        </Grid>
      </Grid>
      <LeftBottom onClick={onClick} />
    </Grid>
  );
};

export default Left;
