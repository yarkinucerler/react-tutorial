import React, { Fragment } from "react";

import { FaSliders } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

import "./movieFilters.scss";

import { useFilters } from "../../providers/FiltersProvider";

import FilterSelect from "../FilterSelect/FilterSelect";

enum Filters {
  byFavorite = "Favoriler",
  byNew = "Yeni Eklenenler",
}

enum Sorts {
  name = "Film Adı",
  year = "Yayın Yılı",
  imdb = "Imdb Puanı",
}

type Props = {};

const MovieFilters: React.FC<Props> = ({}) => {
  const { handleSorting, handleFiltering } = useFilters();

  return (
    <div className="movielist-filters">
      <FilterSelect
        data={Object.keys(Sorts).map((key) => ({
          key: key,
          value: Sorts[key as keyof typeof Sorts],
        }))}
        title="Sırala"
        icon={<FaArrowRightArrowLeft />}
        setFilter={handleSorting}
      />
      <FilterSelect
        data={Object.keys(Filters).map((key) => ({
          key: key,
          value: Filters[key as keyof typeof Filters],
        }))}
        title="Filtrele"
        icon={<FaSliders />}
        setFilter={handleFiltering}
      />
    </div>
  );
};

export default MovieFilters;
