import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  Modal,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useState } from "react";
import { useRouter } from "next/router";
import { delelteUserPost } from "../redux/actions/dashboardActions";
import { connect } from "react-redux";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#2d2d38",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalAction: {
    margin: "0.5rem -0.5rem",
  },
}));

const DashboardPostList = ({ post, delelteUserPost }) => {
  const classes = useStyles();

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = (urlId) => {
    delelteUserPost(urlId);
    handleClose();
  };

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
            onClick={() => router.push(`/dashboard/${post.urlId}/edit`)}
          >
            Edit Post
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleOpen}
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h6" id="transition-modal-title">
              Are you sure you wanna delete?
            </Typography>

            <Grid
              container
              spacing={2}
              justify="space-between"
              className={classes.modalAction}
            >
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() => onDelete(post.urlId)}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
};

export default connect(null, { delelteUserPost })(DashboardPostList);
