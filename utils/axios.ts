// utils/axios.ts
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (for example, to add authorization headers)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add a token here if needed (for auth)
    const token = localStorage.getItem("authToken"); // Just an example, change as needed
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server-side error
      console.error("API error: ", error.response.data);
      throw new Error(
        JSON.stringify(error.response.data) || "Something went wrong."
      );
    } else if (error.request) {
      // No response from server
      console.error("No response from server");
      throw new Error("Network error. Please try again.");
    } else {
      // Error in setting up the request
      console.error("Error setting up the request: ", error.message);
      throw new Error("Request failed. Please try again.");
    }
  }
);

export default axiosInstance;
