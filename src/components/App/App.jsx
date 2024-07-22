import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import fetchPhotots from "../../services/api";
import Loader from "../Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("cat");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getphotos = async () => {
      try {
        setIsLoading(true);
        const response = await fetchPhotots(query, 5);
        setPhotos(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getphotos();
  }, [query]);

  // const onSubmit = (searchQuery) => {
  //   console.log(searchQuery.search);
  //   setQuery(searchQuery.search);
  // };

  console.log(photos);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {isLoading && <Loader />}
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
