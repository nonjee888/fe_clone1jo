import React from "react";
import Headers from "../components/layout/Headers";
import BookMovieLayout from "../components/bookmovie/BookMovieLayout";
import Footers from '../components/layout/Footers'

function BookMovie() {
  return (
  <div>
    <Headers/>
    <BookMovieLayout/>
    <Footers/>
  </div>
  );
}

export default BookMovie;
