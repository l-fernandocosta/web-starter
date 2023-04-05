import axios from "axios";
const isDevelopment = process.env.NODE_ENV === "development";

export const http = axios.create({
  baseURL: isDevelopment
    ? process.env.NEXT_PUBLIC_BASEURL
    : process.env.NEXT_PUBLIC_BASEURL_PROD,
});
