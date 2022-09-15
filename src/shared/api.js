import axios from "axios";

export const instance = axios.create({
  baseURL: "http://54.180.134.85:8080",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // const refreshToken = localStorage.getItem("refresh-token");
  config.headers.Authorization = token;
  // config.headers.refreshToken = refreshToken;
  return config;
});
