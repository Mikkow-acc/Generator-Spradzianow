import axios from "axios";

export const axiosInstanceNoAuth = axios.create({
  baseURL: window.location.origin + "/api/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const axiosInstance = axios.create({
  baseURL: window.location.origin + "/api/",
  timeout: 30000,
  headers: {
    Authorization: "JWT " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    console.log("AxiosError", error.config, error.response);
    if (error.config.url === "/token/obtain/") {
      return Promise.reject(error);
    }
    if (
      (error.response.status === 401 || error.response.status === 400) &&
      error.config.url === "/token/refresh/"
    ) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = window.location.origin + "/loggedout";
      return Promise.reject(error);
    }
    if (
      error.response.status === 401
      // error.response.statusText === "Unauthorized"
    ) {
      const refresh_token = localStorage.getItem("refresh_token");

      return axiosInstance
        .post("/token/refresh/", { refresh: refresh_token })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);

          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;
          originalRequest.headers["Authorization"] =
            "JWT " + response.data.access;

          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
