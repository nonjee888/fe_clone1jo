import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyLikeMovieCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MovieInfoLi>
        <BoxImage>
          <A>
            <ScreenType>
              <ForDx></ForDx>
            </ScreenType>
          </A>
        </BoxImage>
        <BoxContents>
          <A href="">
            <Strong>영화제목</Strong>
          </A>
          <TxtInfo>
            <ReleasedDate>0000.00.00</ReleasedDate>
            <Released>재개봉</Released>
          </TxtInfo>
          <Like>
            <BookBtn
              class="link-reservation"
              href=""
              onClick={() => {
                navigate("/bookmovie");
              }}
            >
              예매하기
            </BookBtn>
          </Like>
          <DeleteBtn></DeleteBtn>
        </BoxContents>
      </MovieInfoLi>
    </div>
  );
};

export default MyLikeMovieCard;

const MovieInfoLi = styled.li`
  float: left;
  position: relative;
  width: 197px;
  margin: 0 0 40px 63px;
  height: 360px;
  width: 197px;
  border: 1px green solid;
`;
const BoxImage = styled.div`
  position: relative;
  margin-bottom: 14px;
  padding: 6px;
  background-color: #222;
  width: 185px;
  height: 261px;
`;
const A = styled.a`
  width: 197px;
  height: 16px;
  display: block;
  color: inherit;
  text-decoration: none;
`;
const ScreenType = styled.span`
  position: absolute;
  left: 0;
  bottom: 6px;
  width: 100%;
  height: 29px;
  padding-top: 27px;
  text-align: center;
  width: 197px;
  height: 29px;
`;
const ForDx = styled.a`
  background-position: 0 -440px;
  display: inline-block;
  width: 80px;
  height: 20px;
  /* background: url("https://img.cgv.co.kr/R2014/images/sprite/sprite_screentype_v2.png")
    no-repeat 0 0; */
  font: 0/0 a;
  text-align: center;
  vertical-align: top;
  zoom: 1;
`;
const BoxContents = styled.div`
  width: 197px;
  height: 73px;
`;
const TxtInfo = styled.span`
  display: flex;
  color: #999999;
  font-size: 12px;
  font-style: normal;
`;
const Strong = styled.strong`
  display: block;
  margin-bottom: 10px;
  color: inherit;
  text-decoration: none;
  width: 197px;
  height: 16px;
`;
const ReleasedDate = styled.div`
  margin-top: 5px;
  font-style: normal;
  font-weight: 500;
  color: #3c3c3c;
`;
const Released = styled.strong`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 11px;
  font-weight: 700;
  color: #3c3c3c;
`;
const Like = styled.span`
  display: block;
  margin-right: 0;
  text-align: left !important;
  width: 197px;
  height: 25px;
`;
const BookBtn = styled.button`
  width: 97px;
  height: 25px;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  background-color: #f34949;
  cursor: pointer;
  border: none;
`;
const DeleteBtn = styled.button`
  position: absolute;
  bottom: 325px;
  left: 160px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background: url("https://img.cgv.co.kr/R2014/images/common/btn/btn_del.gif");
  cursor: pointer;
`;
