import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

export function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="home__title">Melhores Filmes</h2>
      <div className="home__content">
        {topMovies.length === 0 && <p>Carregando...</p> }
        {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  );
}
