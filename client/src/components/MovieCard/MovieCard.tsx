import React from "react";

import { slugify } from "../../utils/helper";

import "./movieCard.scss";
import MovieCardTools from "../MovieCardTools/MovieCardTools";
import Imdb from "../../icons/Imdb";

const MovieCard: React.FC<Movie> = (movie: Movie) => {
  return (
    <a
      href={"/movie-detail/" + slugify(movie.name) + "?movieId=" + movie.id}
      className="movie-card"
    >
      <figure>
        <img src="https://placehold.co/250x370" alt={movie.name} />
        <MovieCardTools {...movie} />
        <figcaption>
          <p>
            {movie.country}, {movie.year}
            {!!movie.isTvSeries && " - Current"}
          </p>
          <p>
            <strong>{movie.name}</strong>
          </p>
          <p>
            <Imdb />
            {movie.imdb} / 100
          </p>
          <p>{movie.category}</p>
        </figcaption>
      </figure>
    </a>
  );
};

export default MovieCard;
