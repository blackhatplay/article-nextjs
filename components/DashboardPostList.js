import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    background: "#2d2d38",
    marginBottom: "2rem",
    "& .MuiTypography-body2": {
      color: "#ccc",
      maxHeight: `${2 * 14 * theme.typography.body2.lineHeight}px`,
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      overflow: "hidden",
    },
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > div button:not(:first-child)": {
      marginLeft: "1rem",
    },
  },
}));

const DashboardPostList = ({ post }) => {
  const classes = useStyles();

  const router = useRouter();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Grid container alignItems="center" spacing={1}>
            <Grid item md={12}>
              <Typography variant="h6" noWrap component="h2">
                {post.title}
              </Typography>
            </Grid>
            {/* <Grid item>
              <BookmarkBorderIcon />
            </Grid> */}
          </Grid>
          <Typography variant="body2" component="p">
            {post.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Box>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
          >
            Edit Post
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
          >
            Delete
          </Button>
        </Box>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableElevation
          href={`/${post.urlId}`}
          target="_blank"
        >
          View Post
        </Button>
      </CardActions>
    </Card>
  );
};

export default DashboardPostList;
