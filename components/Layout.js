import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { Avatar, Box, Container, ListItemAvatar } from "@material-ui/core";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import drawerList from "../constants/drawerList";
import { logout } from "../redux/actions/authActions";
import useLocalStorage from "../utils/useLocalStorage";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#252530",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    background: "#2d2d39",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  listWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    "& .MuiListItem-root": {
      width: "200px",
    },
  },
}));

const Layout = (props) => {
  const router = useRouter();
  const { window, children, user, isLoggedIn } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [token, setToken, clearToken] = useLocalStorage("article-utoken");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogoutClick = async () => {
    await logout(clearToken);
    router.push("/login");
  };

  const drawer = (
    <Box className={classes.wrapper}>
      {/* <div className={classes.toolbar} /> */}
      <Box>
        <Divider />
        <UserInfo user={user} />
        <List className={classes.listWrapper}>
          {drawerList.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                router.push(`/dashboard${item.href}`);
              }}
              justify="center"
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>{item.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Divider />
        <List className={classes.listWrapper}>
          <ListItem
            button
            onClick={() => router.push(`/dashboard/setting`)}
            justify="center"
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <SettingsIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button onClick={onLogoutClick} justify="center">
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <ExitToAppIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawer
        isLoggedIn={isLoggedIn}
        user={user}
      />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default Layout;
