import React from "react";
import classNames from "classnames";
import { FaHeart } from "react-icons/fa6";

import { useFavorites } from "../../contexts/favorite.context";

const MovieCardTools: React.FC<Movie> = (movie: Movie) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="card-tools">
      {!!movie.isTvSeries && <span className="card-badge">TV SERIES</span>}
      <button
        className={classNames("card-favorite", {
          active: isFavorite(movie.id),
        })}
        onClick={handleFavoriteToggle}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default MovieCardTools;
