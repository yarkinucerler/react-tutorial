import React from "react";

import "./headerWithSearch.scss";

import { useFilters } from "../../../providers/FiltersProvider";

import FilterSearch from "../../../components/FilterSearch/FilterSearch";
import FavoriteCounter from "../../../components/FavoriteCounter/FavoriteCounter";

type Props = {};

const HeaderWithSearch: React.FC<Props> = () => {
  const { handleSearch } = useFilters();
  return (
    <header className="header search">
      <FilterSearch setFilter={handleSearch} />
      <FavoriteCounter />
    </header>
  );
};

export default HeaderWithSearch;
