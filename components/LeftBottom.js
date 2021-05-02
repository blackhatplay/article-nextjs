import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  multiline: {
    width: "100%",
  },
  registerBtn: {
    background: "#fff",
    borderRadius: "0",
    padding: "1rem ",
    marginTop: "1rem",
  },
});

const LeftBottom = ({ onClick }) => {
  const classes = useStyles();
  return (
    <>
      {/* <TextField
        id="standard-textarea"
        label="What are you hoping to learn about?"
        placeholder="Where do you work?"
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        rows={4}
        className={classes.multiline}
      /> */}

      <FormControlLabel
        control={<Checkbox name="checkedC" color="primary" />}
        label="I would like to receive emails about future webinars"
      />
      <Button
        variant="contained"
        className={classes.registerBtn}
        onClick={onClick}
      >
        Register now
      </Button>
    </>
  );
};

export default LeftBottom;
