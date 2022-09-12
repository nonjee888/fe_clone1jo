import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyWatchedMovieCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MovieInfoLi>
        <MovieInfo>
          <BoxImage>
            <A
              title="포스터 크게보기"
              href="" //링크 주소 넣을곳
            >
              <Span>포스터 나오는곳</Span>
            </A>
          </BoxImage>
          <BoxContent>
            <DeleteBtn></DeleteBtn>
            <BoxTitle>
              <A
                title="디테일 페이지"
                href="" //링크 주소 넣을곳
              >
                <Strong
                  id="movietitle"
                  onClick={() => {
                    navigate("/moviedetail");
                  }}
                >
                  타이틀
                </Strong>
              </A>
              <P>영어이름</P>
              <Date>2015.00.00 (일) 00:00 ~ 00:00</Date>
              <Place>CGV 강남 3관 8층 / 2명</Place>
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
  border: 1px solid green;
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
const BoxContent = styled.div`
  position: relative;
  width: 550px;
  height: 139px;
  float: left;
`;
const Strong = styled.strong``;
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
