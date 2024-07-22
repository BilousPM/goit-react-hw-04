import axios from "axios";

export const fetchPhotots = async (query) => {
  const ACCESS_KEY = "wp4xAFKY3Ftqixlrg2JE9qdFAU2L2JyQZGvTnqlrbu4";

  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );
  return response.data;
};
