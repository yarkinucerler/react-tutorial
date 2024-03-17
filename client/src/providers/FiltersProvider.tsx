import React, { useContext, useEffect, useState } from "react";
import { useDebounce } from "../hook/useDebounce";

import { FiltersContext } from "../contexts/filters.context";

export const useFilters = () => useContext(FiltersContext);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtering, setFiltering] = useState<string>("");
  const [sorting, setSorting] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (searchTerm) {
      debouncedSearchTerm;
    }
  }, [searchTerm]);

  const handleSearch = (newSelection: string) => {
    setSearchTerm(newSelection);
  };

  const handleFiltering = (newSelection: string) => {
    setFiltering(newSelection);
  };

  const handleSorting = (newSelection: string) => {
    setSorting(newSelection);
  };

  const value = {
    filtering,
    sorting,
    searchTerm,
    handleFiltering,
    handleSorting,
    handleSearch,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
