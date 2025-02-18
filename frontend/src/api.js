import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl =
  "https://58c5d4c3-aa70-4249-8a08-2bd515569797-dev.e1-us-east-azure.choreoapis.dev/django-react-project/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
