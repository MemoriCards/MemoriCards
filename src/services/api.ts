import axios from "axios";

export const api = axios.create({
  baseURL: "https://memori-cards-api.onrender.com",
  timeout: 8000,
});
