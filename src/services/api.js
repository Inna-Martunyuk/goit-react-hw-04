import axios from "axios";

export const fetchArticles = async (topic, currentPage) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID bynmiCSeXQeWA6AnyRqvyr7Ej2kwVsWHZmx_O2vwung",
    },
    params: {
      query: topic, 
      page: currentPage,
      per_page: 12, 
      orientation: "landscape",
    },
  });

  return response.data.results; 
};
