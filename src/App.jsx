import { useEffect, useState } from "react";
import "./App.css";
import { fetchArticles } from "../src/services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchPhoto, setSearchPhoto] = useState("");

  const handleSearch = (topic) => {
    setSearchPhoto(topic);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (searchPhoto === "") return;

    async function getData() {
      try {
        setIsLoading(true);
        setError(false); 
        const data = await fetchArticles(searchPhoto, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchPhoto]);

  const handleMoreBtn = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleMoreBtn} />
      )}
    </>
  );
}

export default App;
