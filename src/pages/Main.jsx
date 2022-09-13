import React from "react";
import Headers from "../components/layout/Headers";
import Footers from "../components/layout/Footers";
import styled from "styled-components";
import MainEtc from "../components/main/MainEtc";
import Event from "../components/main/Event";
import MovieChart from "../components/main/MovieChart";
import MovieTrailer from "../components/main/MovieTrailer";

function Main() {
  return (
    <>
      <Headers />
      <StMain>
        <MovieTrailer />
        <MovieChart />
        <Event />
        <MainEtc />
      </StMain>
      <Footers />
    </>
  );
}

export default Main;

const StMain = styled.div`
  max-width: 100%;
  min-width: 1040px;
  margin: 0 auto;
  position: relative;
  display: block;
`;
