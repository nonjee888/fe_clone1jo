import React from "react";
import styled from "styled-components";

function MovieChart() {
  return (
    <div>
      <MvChrtWrap>무비차트 | 상영예정작</MvChrtWrap>
    </div>
  );
}

export default MovieChart;

const MvChrtWrap = styled.div`
  height: 461px;
  clear: none;
  float: none;
  background-color: #eeee;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  word-break: break-all;
`;
