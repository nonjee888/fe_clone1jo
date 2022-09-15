import React from "react";
import Headers from "../components/layout/Headers";
import Footers from "../components/layout/Footers";
import MovieListCard2 from "../components/movielist/MovieListCard2";
import MovieCard from "../components/movielist/MovieCard";

const MovieChartList = () => {
  return (
    <>
      <Headers />
      <MovieListCard2 />
      <Footers />
    </>
  );
};

export default MovieChartList;
