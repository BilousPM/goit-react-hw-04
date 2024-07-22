import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchPhotots } from "../../services/api";

const App = () => {
  const [query, setQuery] = useState("cat");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getphotos = async () => {
      try {
        const response = await fetchPhotots("hotgirl");
        setPhotos(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    getphotos();
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

// axios
//   .get(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
//     headers: {
//       Authorization: `Client-ID ${ACCESS_KEY}`,
//     },
//   })
//   .then((res) => {
//     setPhotos(res.data.results);
//   })
//   .catch();
