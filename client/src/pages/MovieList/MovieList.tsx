import React, { useState, useEffect } from "react";

import "./movieList.scss";

import useFetch from "../../hook/useFetch";

import { useLayout } from "../../contexts/layout.context";
import { useFilters } from "../../providers/FiltersProvider";

import ListLayout from "../../layouts/ListLayout";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieFilters from "../../components/MovieFilters/MovieFilters";

const MovieList: React.FC = () => {
  const { setLayout } = useLayout();
  const [movies, setMovies] = useState<Movie[]>([]);
  const { filtering, sorting, searchTerm } = useFilters();

  const { data, isLoading, error } = useFetch<Movie[]>(
    "http://localhost:3000/movies"
  );

  useEffect(() => {
    setLayout(<ListLayout />);
  }, [setLayout]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  useEffect(() => {
    let updatedMovies = data;

    if (searchTerm) {
      updatedMovies = filterSearching(updatedMovies, searchTerm);
    }

    if (filtering) {
      // updatedMovies = filterFiltering(updatedMovies, filtering);
    }

    if (sorting) {
      updatedMovies = filterSorting(updatedMovies, sorting);
    }

    setMovies(updatedMovies);
  }, [data, filtering, sorting, searchTerm]);

  const filterSorting = (collection: Movie[], sortingKey: string): Movie[] => {
    return [...collection].sort((a, b) => {
      const valueA = a[sortingKey];
      const valueB = b[sortingKey];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      } else if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      }
      return 0;
    });
  };

  const filterSearching = (collection: Movie[], query: string): Movie[] => {
    return collection.filter((movie: Movie) =>
      movie.name.toLowerCase().includes(query)
    );
  };

  const filterFiltering = (collection: Movie[], query: string): Movie[] => {
    return collection;
  };

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div className="movielist-container">
      <header className="movielist-header">
        <h3>Movies</h3>
        <MovieFilters />
      </header>
      <div className="movielist-wrapper">
        {movies?.map((movie: Movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
