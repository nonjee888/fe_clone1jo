import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function MovieChartCard({ movie }) {
  const navigate = useNavigate();
  let id = movie.id; // id는 movie.movie라는 데이터의 id와 같다
  return (
    <div>
      <MovieCard>
        <div className="ImageWrap">
          <ImageSrc src={movie?.img}></ImageSrc>
          <MovieChartBtn className="detailButton">
            <button
              className="DetailBtn"
              onClick={() => {
                navigate("/moviedetail/" + id); // 상세보기 누르면 해당 영화의 상세 페이지로 이동
              }}
            >
              상세보기
            </button>
            <button
              className="BookBtn"
              onClick={() => {
                navigate("/bookmovie"); // 예매하기 누르면 예약 페이지로 이동
              }}
            >
              예매하기
            </button>
          </MovieChartBtn>
        </div>
        <MovieInfoWrap>
          <StInfo>{movie?.title}</StInfo>
          <Rateinfo>
            <Img
              src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
              alt="Golden egg great"
            />
          </Rateinfo>

          <BookingRate>{movie?.rate}</BookingRate>
        </MovieInfoWrap>
      </MovieCard>
    </div>
  );
}

export default MovieChartCard;

const MovieCard = styled.li`
  /* counter-reset: number 1; */ //연구대상 counter 기능!
  width: 170px;
  height: 234px;
  background-size: cover;
  border-radius: 10px;
  .detailButton {
    display: none;
  }
  &:hover {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.09) 35%,
        rgba(0, 0, 0, 0.454)
      ),
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.09) 35%,
        rgba(0, 0, 0, 0.54)
      );
    .detailButton {
      display: block;
    }
  }
`;
const ImageSrc = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(0, -50%);
  z-index: 1;
  vertical-align: middle;
`;
const MovieChartBtn = styled.div``;
const MovieInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StInfo = styled.strong`
  display: block;
  flex-basis: 100%;
  overflow: hidden;
  margin-top: 14px;
  font-size: 18px;
  color: #222;
  line-height: 1.167em;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 170.4px;
  height: 21px;
`;
const Rateinfo = styled.span``;
const Img = styled.img`
  margin-left: 45px;
  margin-top: 5px;
  width: 16px;
  height: 16px;
  vertical-align: top;
`;
const BookingRate = styled.span`
  position: relative;
  padding-left: 16px;
  display: block;
  float: left;
  margin-top: 5px;
  font-size: 14px;
  color: #444;
  line-height: 1.214em;
  position: relative;
  padding-left: 16px;
  font-weight: 500;
`;
