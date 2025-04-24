import axios from "axios";
import { getToken } from "../utils/cookieUtils";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
