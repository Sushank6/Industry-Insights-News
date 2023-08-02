import axios from "axios";
const API_KEY = "3c415d2a3ac745faa741245fbc667289";
// const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

export const fetchNewsData = async (query) => {
  try {
    const response = await axios.get(
      `https://api.example.com/news?query=${query}&apiKey=YOUR_API_KEY`
    );

    // Return the full response instead of just response.data
    return response;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return null;
  }
};
