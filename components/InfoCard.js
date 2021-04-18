import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#2d2d38",
    marginBottom: "2rem",
  },
  title: {
    fontSize: 14,
  },
  button: {
    marginTop: "1rem",
  },
});

const InfoCard = ({ title, body, icon, hrefText, href }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
          </Grid>
          {icon && <Grid item>{icon}</Grid>}
        </Grid>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
        {hrefText && (
          <Link href={`${href}`} passHref>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableElevation
            >
              {hrefText}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
