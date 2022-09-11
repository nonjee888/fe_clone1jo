import React from "react";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import BookMovie from "../pages/BookMovie";
import MyLikeList from "../pages/MyLikeList";
import MyMovieList from "../pages/MyMovieList";
import MovieChartList from "../pages/MovieChartList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/bookmovie" element={<BookMovie />} exact />
          <Route path="/moviedetail" element={<Detail />} exact />
          <Route path="/moviechart" element={<MovieChartList />} exact />
          <Route path="/movielist" element={<MyMovieList />} exact />
          <Route path="/likelist" element={<MyLikeList />} exact />
          <Route path="/search" element={<Search />} exact />
          <Route path="/admin" element={<Admin />} exact />
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
