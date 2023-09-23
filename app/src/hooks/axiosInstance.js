import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.getlinked.ai",
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
