import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";

import "./styles.scss";

const searchURL = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_API_KEY;

export function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchURL}?${apikey}&query=${query}`;

    getSearchMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="search">
      <div className="container">
        <h2 className="search__title">
          Resultados para: <span className="search__query-text">{query}</span>
        </h2>
        <div className="search__content">
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 &&
            movies.map((movie) => (
              <div className="search__cards">
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
