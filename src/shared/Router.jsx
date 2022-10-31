import React from "react";
import Main from "../pages/Main";
import BookMovie from "../pages/BookMovie";
import Loginpage from "../pages/Loginpage";
import Detail from "../pages/Detail";
import MyLikeList from "../pages/MyLikeList";
import MyMovieList from "../pages/MyMovieList";
import Seat from "../pages/Seat";
import Ticketpage from "../pages/Ticketpage";
import MovieChartList from "../pages/MovieChartList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../pages/Loading";
import KakaoLoading from "../pages/KakaoLoading";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/login" element={<Loginpage />} exact />
          <Route path="/bookmovie" element={<BookMovie />} exact />
          <Route path="/moviedetail/:id" element={<Detail />} exact />
          <Route path="/moviechart" element={<MovieChartList />} exact />
          <Route path="/movielist" element={<MyMovieList />} exact />
          <Route path="/likelist" element={<MyLikeList />} exact />
          <Route path="/seat" element={<Seat />} exact />
          <Route path="/ticket" element={<Ticketpage />} exact />
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
          <Route path="/loading" element={<Loading />} exact />
          <Route path="/kakaoloading/" element={<KakaoLoading />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
