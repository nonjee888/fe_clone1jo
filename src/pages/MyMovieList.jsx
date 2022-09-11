import React from "react";
import Headers from "../components/layout/Headers";
import Footers from "../components/layout/Footers";
import MyWatchedMovie from "../components/mymovielist/MyWatchedMovie";

function MyMovieList() {
  return (
    <div>
      <Headers />
      <MyWatchedMovie />
      <Footers />
    </div>
  );
}

export default MyMovieList;
