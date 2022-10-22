import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MovieCard } from "../../components/MovieCard";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "./styles.scss";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

export function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function getMovie(url) {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  function formatCurrency(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apikey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie">
      <div className="container">
        {movie && (
          <div className="movie__box">
            <MovieCard movie={movie} showLink={false} />
            <div className="movie__info">
              <p className="movie__tagline">{movie.tagline}</p>
              <h3>
                <BsWallet2 /> Orçamento
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
              <h3>
                <BsHourglassSplit /> Duração
              </h3>
              <p>{movie.runtime} min</p>
            </div>
            <div className="movie__description">
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
