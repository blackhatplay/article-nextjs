import axios from "axios";

export const serverURL = process.env.NEXT_PUBLIC_SERVER;

export default axios.create({
  baseURL: `/api`,
});
