import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
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
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1rem",
  },
  topicWrapper: {
    margin: "1rem 0",
  },
  topicItem: {
    padding: "1rem 0",
    "&:not(:last-child)": {
      // borderBottom: "1px solid #252530",
    },
  },
});

const ToFollow = () => {
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="h6" className={classes.title} component="h2">
                TOPICS TO FOLLOW
              </Typography>
            </Grid>
          </Grid>
          <Box className={classes.topicWrapper}>
            <Grid
              container
              justify="space-between"
              className={classes.topicItem}
            >
              <Grid item>
                <Typography variant="h6" component="h1">
                  Coronavirus
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Follow
                </Button>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              justify="space-between"
              className={classes.topicItem}
            >
              <Grid item>
                <Typography variant="h6" component="h1">
                  Software Engineering
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Follow
                </Button>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              justify="space-between"
              className={classes.topicItem}
            >
              <Grid item>
                <Typography variant="h6" component="h1">
                  Lifestyle
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Follow
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ToFollow;
