import axios, { InternalAxiosRequestConfig } from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": `${import.meta.env.VITE_SERVER_URL}`,
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.withCredentials = true;
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `${accessToken}`;
    } else {
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default client;
