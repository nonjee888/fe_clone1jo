import React from "react";
import Headers from "../components/layout/Headers";
import Footers from "../components/layout/Footers";
import MovieListCard from "../components/movielist/MovieListCard";
import MovieCard from "../components/movielist/MovieCard";

const MovieChartList = () => {
  return (
    <>
      <Headers />
      <MovieListCard />
      {/* <MovieCard /> */}
      <Footers />
    </>
  );
};

export default MovieChartList;
