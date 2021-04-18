import {
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import { useState } from "react";
import { logout } from "../redux/actions/authActions";
import useLocalStorage from "../utils/useLocalStorage";
import { useRouter } from "next/router";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  appBarDrawer: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      // width: "100%",
      marginLeft: drawerWidth,
      // zIndex: theme.zIndex.drawer + 1,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      width: "100%",
      marginLeft: drawerWidth,
      // zIndex: theme.zIndex.drawer + 1,
    },
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    color: "#fafafa",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    "& img": {
      maxWidth: "45px",
    },
  },
  a: {
    color: "#fafafa",
    textDecoration: "none",
    fontSize: "1rem",
  },
  menu: {
    "& .MuiMenu-paper": {
      background: "#2d2d39",
    },
  },
  button: {
    background: "#1f1f29",
    marginLeft: "1rem",
    fontSize: "1rem",
  },
}));

const Header = ({ isLoggedIn, user, handleDrawerToggle, drawer }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const [token, setToken, clearToken] = useLocalStorage();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = async () => {
    await logout(clearToken);
    router.push("/login");
    handleClose();
  };

  const onDashboardClick = () => {
    handleClose();
    router.push("/dashboard");
  };

  const toolbar = (
    <Toolbar>
      <Grid container justify="center" alignItems="center">
        <Grid item style={{ display: "flex" }}>
          {drawer ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : null}

          <Link href="/">
            <a className={classes.logo}>
              <img src="/logo.png" alt="logo" />
              <Typography variant="h6" noWrap>
                Maido
              </Typography>
            </a>
          </Link>
        </Grid>
        <Grid item xs></Grid>
        <Grid item>
          <Typography variant="h6" noWrap>
            {isLoggedIn ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle fontSize="large" color="secondary" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                  className={classes.menu}
                >
                  <MenuItem onClick={onDashboardClick}>Dashboard</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <a className={classes.a}>Login</a>
                </Link>
                <Link href="/register" passHref>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Register now
                  </Button>
                </Link>
              </>
            )}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h6" noWrap></Typography>
    </Toolbar>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className={drawer ? classes.appBarDrawer : classes.appBar}
      >
        {drawer ? (
          toolbar
        ) : (
          <Container maxWidth="lg" disableGutters>
            {toolbar}
          </Container>
        )}
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user,
  };
};

export default Header;
