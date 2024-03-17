import React from "react";

import "./filterSearch.scss";

import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
  setFilter: (newTerm: string) => void;
};

const FilterSearch: React.FC<Props> = ({ setFilter }) => {
  return (
    <div className="search-wrapper">
      <input
        id="search-input"
        className="search-input"
        type="text"
        placeholder="What do you want to watch?"
        onChange={(event) => {
          const query = event.target.value.toLowerCase();
          setFilter(query);
        }}
      />
      <label htmlFor="input-search">
        <FaMagnifyingGlass />
      </label>
    </div>
  );
};

export default FilterSearch;
