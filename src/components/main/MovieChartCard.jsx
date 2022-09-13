import React from "react";
import styled from "styled-components";

function MovieChartCard() {
  return (
    <div>
      <MovieCard>
        <div className="ImageWrap">
          <ImageSrc src="" alt="">
            <MovieAge>
              <Ageinfo></Ageinfo>
            </MovieAge>
          </ImageSrc>
          <MovieChartBtn className="detailButton">
            <button className="DetailBtn" src="">
              상세보기
            </button>
            <button className="BookBtn" src="">
              예매하기
            </button>
          </MovieChartBtn>
        </div>
        <MovieInfoWrap>
          <StInfo>공조2 인터내셔날</StInfo>
          <Rateinfo>
            <Img
              src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
              alt="Golden egg great"
            />
          </Rateinfo>
          <Eggnumber>92%</Eggnumber>
          <BookingRate>예매율 0.3%</BookingRate>
        </MovieInfoWrap>
      </MovieCard>
    </div>
  );
}

export default MovieChartCard;

const MovieCard = styled.li`
  width: 170px;
  height: 234px;
  background-image: url("https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86155/86155_320.jpg");
  background-size: cover;
  border-radius: 10px;
  .detailButton {
    display: none;
  }
  &:hover {
    .detailButton {
      display: block;
    }
  }
`;
const ImageSrc = styled.image`
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
const MovieAge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  right: 6px;
  top: 7px;
  z-index: 4;
`;
const Ageinfo = styled.i`
  overflow: hidden;
  width: 20px;
  height: 20px;
  background: transparent;
  /* url(
      "data:image/svg + xml;charset=UTF-8,
      %3csvgwidth="20"height="20"fill="none"xmlns="http://www.w3.org/2000/svg"%3e%3cgclip-path="url(%23age15)"%3e%3cpathd="M17.745 20H2.255A2.256 2.256 0 0 1 0 17.745V2.255A2.255 2.255 0 0 1 2.255 0h15.49A2.253 2.253 0 0 1 20 2.255v15.49A2.254 2.254 0 0 1 17.745 20Z"fill="%23DD742F"/%3e%3cpathd="M4.318 16.891v-9.94H3.217L4.643 3.11h2.761V16.89H4.318ZM16.313 7.815h-4.834v-2.02h5.052V3.107H8.45v7.342h5.177v3.85h-2.183v-1.812H8.45v4.095a.306.306 0 0 0 .307.308h7.556a.306.306 0 0 0 .308-.308V8.125a.307.307 0 0 0-.308-.31Z"fill="%23fff"/%3e%3c/g%3e%3cdefs%3e%3cclipPathid="age15"%3e%3cpathfill="%23fff"d="M0 0h20v20H0z"/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
    )
    center/contain scroll no-repeat; */
  border-radius: 2px;
`;
const MovieChartBtn = styled.div`
  /* position: relative; */
  /* display: none; */
`;
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
  /* border: black 1px solid; */
`;
const Eggnumber = styled.p`
  margin-top: 5px;
  font-size: 15px;
`;
const Rateinfo = styled.span``;
const Img = styled.image`
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
