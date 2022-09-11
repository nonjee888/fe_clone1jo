import React from "react";
import styled from "styled-components";
import MainEtc from "../components/main/MainEtc";
import Event from "../components/main/Event";
import MovieChart from "../components/main/MovieChart";
import MovieTrailer from "../components/main/MovieTrailer";

function Main() {
  return (
    <>
      <StMain>
        <MovieTrailer />
        <MovieChart />
        <Event />
        <MainEtc />
      </StMain>
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
