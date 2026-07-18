import axios from "axios";

const api = axios.create({
  baseURL: "https://ats-score-ai-nfh8.onrender.com/api",
});

export default api;