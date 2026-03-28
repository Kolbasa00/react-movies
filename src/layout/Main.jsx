import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = import.meta.env.VITE_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (title, typeSearch = "all") => {
    setMovies([]);
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${typeSearch !== "all" ? `&type=${typeSearch}` : ""}`,
      );
      const data = await response.json();
      setMovies(data.Search);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=Avatar`,
        );
        const data = await response.json();
        setMovies(data.Search);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchInitialMovies();
  }, []);

  return (
    <main className="max-w-7xl w-full mx-auto flex-1">
      <Search handleSearch={handleSearch} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export default Main;
