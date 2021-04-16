import {
  Card,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#2d2d38",
    marginBottom: "2rem",
  },
  title: {
    fontSize: 14,
  },
});

const InfoCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h6" component="h2">
              Bookmark stories for later
            </Typography>
          </Grid>
          <Grid item>
            <BookmarkBorderIcon />
          </Grid>
        </Grid>
        <Typography variant="body2" component="p">
          Start saving stories by clicking the bookmark icon and you’ll find
          them all here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
