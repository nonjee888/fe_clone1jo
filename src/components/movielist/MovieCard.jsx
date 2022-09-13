import React from "react";
import styled from "styled-components";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <Moviecardcontainer>
      <Cardheader>
        <p>no.1</p>
      </Cardheader>
      <Imgbox>
        <a href="/moviedetail">
          <img src={movie.img}></img>
        </a>
      </Imgbox>
      <Cardinfo>
        <Title>
          <p>{movie.title}</p>
        </Title>
        <Rate>
          <p>예매율 : {movie.rate}%</p>
        </Rate>
        <Date>
          <p>개봉 : {movie.date}</p>
        </Date>
        <But>
          <a href="/bookmovie">
            <button>예매하기</button>
          </a>
        </But>
      </Cardinfo>
    </Moviecardcontainer>
  );
};

export default MovieCard;

const Moviecardcontainer = styled.div`
  margin: 0px 19px 0px 19px;
  width: 200px;
  height: 500px;
`;
const Cardheader = styled.div`
  height: 29px;
  font-size: 19px;
  color: white;
  background-color: #fb4357;
  text-align: center;
  line-height: 29px;
  font-weight: 700;
`;
const Imgbox = styled.div`
  img {
    margin-top: 5px;
    width: 100%;
  }
`;
const Cardinfo = styled.div``;
const Title = styled.div`
  color: #333333;
  white-space: nowrap; //
  text-overflow: ellipsis; //제목 텍스트 길어지면 말줄임표로 줄임
  overflow: hidden; // css 세개가 세트
  height: 30px;
  font-weight: 640;
`;
const Rate = styled.div`
  font-size: 11px;
  display: flex;
  p {
    color: #4f4c4c;
    font-weight: 600;
  }
  margin: 0 auto;
  height: 20px;
`;
const Date = styled.div`
  font-size: 11px;
  color: #4f4c4c;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 auto;
  font-weight: 600;
`;
const But = styled.div`
  margin-top: 8px;
  button {
    width: 87px;
    height: 25px;
    line-height: 20px;
    text-align: center;
    color: white;
    background-color: #fb4357;
    border-radius: 5px;
    border-color: #fb4357;
    font-weight: 700;
  }
`;
