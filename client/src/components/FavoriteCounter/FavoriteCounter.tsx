import React from "react";

import "./favoriteCounter.scss";
import { useFavorites } from "../../contexts/favorite.context";

type Props = {};

const FavoriteCounter: React.FC<Props> = () => {
  const { favorites } = useFavorites();
  return (
    <div className="favorite-counter-wrapper">
      <span>Favoriler</span>
      {favorites.length && <em>{favorites.length}</em>}
    </div>
  );
};

export default FavoriteCounter;
