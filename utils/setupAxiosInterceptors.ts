import axiosInstance from "./axios";

export function setupAxiosInterceptors(getToken: () => string | null) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Server-side error
        console.error("API error: ", error?.response?.data);
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
}
