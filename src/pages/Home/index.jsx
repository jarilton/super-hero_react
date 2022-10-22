import { useState, useEffect } from "react";
import { MovieCard } from "../../components/MovieCard";

import "./styles.scss";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

export function Home() {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopRatedMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home__box">
          <h2 className="home__title">Melhores Filmes</h2>
          <div className="home__content">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 &&
              topMovies.map((movie) => (
                <div className="home__cards" key={movie.id} >
                  <MovieCard movie={movie} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
