import axios from "axios";

const API_KEY = "000710dd7df24433a516c43522e32412";
const BASE_URL = "https://newsapi.org/v2";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Api-Key": API_KEY },
});

export const fetchTopHeadlinesByCategory = async (category = "general", page = 1, pageSize = 12) => {
  const { data } = await axiosInstance.get("/top-headlines", {
    params: {
      category,
      page,
      pageSize,
      language: "en",
      country: "us",
    },
  });
  if (data.status !== "ok") throw new Error(data.message || "Failed to fetch news");
  return data;
};
