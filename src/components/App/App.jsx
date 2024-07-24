import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import fetchPhotots from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [query, setQuery] = useState("cat");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getphotos = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchPhotots(query, page, 2);
        setPhotos((prev) => [...prev, ...response.results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getphotos();
  }, [query, page]);

  // const onSubmit = (searchQuery) => {
  //   console.log(searchQuery.search);
  //   setQuery(searchQuery.search);
  // };

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      <LoadMoreBtn
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      />
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
