import axios from "axios";
const BizSphere = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "Dev"
      ? import.meta.env.VITE_DEV_URL
      : import.meta.env.VITE_PROD_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

BizSphere.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;
    const code = error?.response?.data?.code;

    const shouldRefresh =
      (status === 401 && code === "TOKEN_EXPIRED") ||
      (code === "TOKEN_MISSING" && !originalRequest._retry);

    if (shouldRefresh) {
      originalRequest._retry = true;

      try {
        await BizSphere.post("/refreshToken");
        return BizSphere(originalRequest); // to retry ongoing request
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default BizSphere;
