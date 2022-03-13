import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fitnessblog-app.herokuapp.com/api/",
});

