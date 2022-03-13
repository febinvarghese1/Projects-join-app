import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://blogapp-fitness.herokuapp.com/api/",
});

