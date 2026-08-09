import axios from "axios";

const api = axios.create({
  baseURL: "https://linkedin-post-generator-api-6jud.onrender.com",
});

export default api;