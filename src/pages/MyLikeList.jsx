import React from "react";
import Headers from "../components/layout/Headers";
import Footers from "../components/layout/Footers";
import MyLikeMovies from "../components/mymovielist/MyLikeMovies";

const MyLikeList = () => {
  return (
    <div>
      <Headers />
      <MyLikeMovies />
      <Footers />
    </div>
  );
};

export default MyLikeList;
