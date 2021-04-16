import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#252530",
    },
    secondary: {
      main: "#fafafa",
    },
    background: {
      default: "#252530",
    },
    text: {
      primary: "#fafafa",
    },
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;