import React from "react";
import styled from "styled-components";

const MyWatchedMovieCard = () => {
  return (
    <div>
      <MovieInfoLi></MovieInfoLi>
    </div>
  );
};

export default MyWatchedMovieCard;

const MovieInfoLi = styled.li`
  display: list-item;
  margin-top: 10px;
  text-align: -webkit-match-parent;
  padding-bottom: 15px;
  border-bottom: 1px solid #d6d4ca;
  width: 720px;
  height: 158px;
  border: 1px solid green;
`;
const DeleteBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: black;
  border: none;
  background-img: url("https://img.cgv.co.kr/R2014/images/common/btn/btn_del.gif");
`;
