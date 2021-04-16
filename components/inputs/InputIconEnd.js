import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";

const InputIconEnd = () => {
  return (
    <FormControl className={`${classes.margin} ${classes.textField}`}>
      <InputLabel
        htmlFor="standard-adornment-password"
        className={classes.label}
      >
        Username/Email
      </InputLabel>
      <Input
        id="standard-adornment-password"
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
  );
};

export default InputIconEnd;
