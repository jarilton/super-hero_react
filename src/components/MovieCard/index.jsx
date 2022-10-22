import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./styles.scss";

const imageUrl = import.meta.env.VITE_IMG;

console.log(imageUrl);

export function MovieCard({ movie, showLink = true }) {
  return (
    <div className="movie-card">
      <div className="container">
        <div className="movie-card__box">
          <img
            src={imageUrl + movie.poster_path}
            alt={movie.title}
            className="movie-card__img"
          />
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__star">
            <FaStar color="var(--main)" /> {movie.vote_average}
          </p>
          {showLink && (
            <Link to={`/movie/${movie.id}`} className="movie-card__button-link">
              Detalhes
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
