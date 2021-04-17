import nookies from "nookies";
import jwt_decode from "jwt-decode";

const serverAuth = (context, path) => {
  const { req, res } = context;
  const cookies = nookies.get(context);

  const cookie = cookies.articleStoken;

  const token = cookie && cookie.split(" ")[1];

  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return {
        redirect: {
          destination: path,
          permanent: false,
        },
      };
    }
    return {
      props: {
        isLoggedIn: true,
        user: decoded,
      },
    };
  } else {
    return {
      redirect: {
        destination: path,
        permanent: false,
      },
    };
  }
};

export default serverAuth;
