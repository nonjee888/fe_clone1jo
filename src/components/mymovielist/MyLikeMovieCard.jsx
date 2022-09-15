import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyLikeMovieCard = ({ likeMovie }) => {
  const id = likeMovie.id;
  const navigate = useNavigate();
  return (
    <div>
      <MovieInfoLi>
        <BoxContents>
          <Img
            src={likeMovie?.img}
            onClick={() => {
              navigate("/moviedetail/" + id); // 내가 찜한 영화 포스터 누르면 상세페이지로 이동
            }}
          ></Img>
          <Strong>{likeMovie?.title}</Strong>

          <TxtInfo>
            <ReleasedDate>{likeMovie?.date}</ReleasedDate>
            <Released> 예매율 : {likeMovie?.rate}</Released>
          </TxtInfo>
          <Like>
            <BookBtn
              className="link-reservation"
              href=""
              onClick={() => {
                navigate("/bookmovie/"); //예매하기 페이지로 이동
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
const Img = styled.img`
  width: 185px;
  height: 261px;
  cursor: pointer;
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
