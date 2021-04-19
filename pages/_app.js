import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import "../styles/main.scss";
import theme from "../utils/theme";
import { useStore } from "../redux/store";
import { Provider } from "react-redux";
import useLocalStorage from "../utils/useLocalStorage";
import jwt_decode from "jwt-decode";
import { logout } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../redux/types";
import setAuthToken from "../utils/setAuthToken";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const store = useStore(pageProps.initialReduxState);

  const hasWindow = typeof window !== "undefined";

  const [token, setToken, clearToken] = useLocalStorage("article-utoken");

  useEffect(() => {
    if (token && hasWindow) {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        logout(clearToken);
        // window.location.href = "/login";
      } else {
        // setAuthToken(token);
        store.dispatch({
          type: LOGIN_SUCCESS,
          payload: decoded,
        });
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
