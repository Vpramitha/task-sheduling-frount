import axios from "axios";

// Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:3000/api", // replace with your backend URL
});

// Add JWT token to headers automatically if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
