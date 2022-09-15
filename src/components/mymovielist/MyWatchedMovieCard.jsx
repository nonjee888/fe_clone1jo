import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyWatchedMovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const id = movie.movieId;
  return (
    <div>
      <MovieInfoLi>
        <MovieInfo>
          <BoxImage>
            <A
              title="포스터 크게보기"
              href={movie.movieImg} //링크 주소 넣을곳
            >
              <Span>
                <Img src={movie.movieImg} />
              </Span>
            </A>
          </BoxImage>
          <BoxContent>
            <DeleteBtn></DeleteBtn>
            <BoxTitle>
              <Strong
                id="movietitle"
                onClick={() => {
                  navigate("/moviedetail/" + id);
                }}
              >
                {movie.movieTitle}
              </Strong>

              <P>{movie.movieTitleEng}</P>
              <Date>{movie.date}</Date>
              <Place>
                CGV {movie.town} 3관 8층 / {movie.memberCount}
              </Place>
              <Rate href="">이 영화를 평가해주세요</Rate>
            </BoxTitle>
          </BoxContent>
        </MovieInfo>
      </MovieInfoLi>
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
`;
const MovieInfo = styled.div`
  position: relative;
  width: 720px;
  height: 158px;
`;
const BoxImage = styled.div`
  float: left;
  width: 110px;
  height: 158px;
  margin-right: 22px;
`;
const A = styled.a``;
const Span = styled.span`
  width: 110px;
  height: 154.59px;
  display: block;
  position: relative;
`;
const Img = styled.img`
  width: 110px;
  height: 154.59px;
`;
const BoxContent = styled.div`
  position: relative;
  width: 550px;
  height: 139px;
  float: left;
`;
const Strong = styled.strong`
  cursor: pointer;
`;
const BoxTitle = styled.div`
  font-size: 23px;
  width: 550px;
  height: 45px;
  margin: 14px 0;
`;
const P = styled.p`
  color: #666;
  font-family: verdana, sans-serif;
  font-size: 11px;
  font-weight: bold;
`;
const DeleteBtn = styled.button`
  position: absolute;
  bottom: 100px;
  left: 540px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: url("https://img.cgv.co.kr/R2014/images/common/btn/btn_del.gif");
`;
const Date = styled.p`
  margin-top: 15px;
  color: #222;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 9px;
`;
const Place = styled.p`
  color: #222;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 15px;
`;
const Rate = styled.a`
  display: block;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  font-size: 12px;
  font-weight: 850;
`;
