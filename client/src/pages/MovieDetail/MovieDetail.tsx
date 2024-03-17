import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import "./movieDetail.scss";

import useFetch from "../../hook/useFetch";

import { useLayout } from "../../contexts/layout.context";
import DefaultLayout from "../../layouts/DefaultLayout";
import Imdb from "../../icons/Imdb";
import MovieCardTools from "../../components/MovieCardTools/MovieCardTools";

const MovieDetail = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const query = searchParams.get("movieId");

  const { setLayout } = useLayout();

  const {
    data: movie,
    isLoading,
    error,
  } = useFetch<Movie>("http://localhost:3000/movies/" + query);

  useEffect(() => {
    if (movie) {
      setLayout(<DefaultLayout headerType="custom" title={movie.name} />);
    }
  }, [setLayout, movie]);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div className="movie-detail-wrapper">
      <img src="https://placehold.co/1244x600" alt={movie.name} />
      <MovieCardTools {...movie} />
      <p className="movie-detaile-summary">{movie.summary}</p>
      <hr />
      <div className="movie-detail-features">
        <p>
          <Imdb />
          {movie.imdb} / 100
        </p>
        <p>{movie.category}</p>
        <p>
          {movie.country}, {movie.year}
          {!!movie.isTvSeries && " - Current"}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
