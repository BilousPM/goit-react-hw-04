import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";

const App = () => {
  const [query, setQuery] = useState("cat");
  const [photos, setPhotos] = useState([]);
  const ACCESS_KEY = "wp4xAFKY3Ftqixlrg2JE9qdFAU2L2JyQZGvTnqlrbu4";
  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then((res) => {
        setPhotos(res.data.results);

        // console.log(res.data.results);
      })
      .catch();
  }, [query]);

  const onSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  console.log(photos);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </div>
  );
};

export default App;
