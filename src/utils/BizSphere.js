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

export default BizSphere;
