import axios from "axios";

export const serverURL = process.env.NEXT_PUBLIC_SERVER;

export default axios.create({
  // baseURL: serverURL,
  baseURL: `https://articles-backend.glitch.me`,
});
