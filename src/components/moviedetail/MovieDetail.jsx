import styled from "styled-components";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../../redux/modules/movies";
import { useParams } from "react-router-dom";
import { onLikePost } from "../../redux/modules/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, detail, like } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getDetails(id)); //useParams로 가져온 파라미터를 payload로 보내주어 디테일 페이지 get 요청
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onLike = async (event) => {
    event.preventDefault();
    // window.alert("내가 찜한 영화 목록에 저장되었습니다."); 작동안됨. 함께 연구해보아요.
    dispatch(onLikePost(id));
  };

  var newText = detail.detail.replace(/(<([^>]+)>)/gi, ""); //태그 제거
  var tmp = newText.replace(/&nbsp;/gi, " "); //공백 제거
  var tmp2 = tmp.replace(/&lt;/gi, ""); //부등호(<) 제거
  var tmp3 = tmp2.replace(/&gt;/gi, ""); //부등호(>) 제거

  const likebtn = like == "true"; // likebtn = 스토어에서 오는 like와 "true"를 비교해서 true, false를 반환

  return (
    <>
      <div>
        <Container>
          <Infobox>
            <img src={detail.img} />
            <Info>
              <Title>
                <h3>{detail?.title}</h3>
                <Status>
                  {detail?.status === 2 ? "현재 상영중" : "상영 종료"}
                </Status>
              </Title>
              <Engtitle>{detail?.titleEng}</Engtitle>
              <Rate>
                <p>예매율 : {detail?.rate}</p>
              </Rate>
              <Hr />
              <Moviedesc>
                <div>
                  <p>
                    감독 : {detail?.director} / 배우 : {detail?.actor}
                  </p>
                </div>
                <div>
                  <p>장르 : {detail?.genre}</p>
                </div>
                <div>
                  <p>개봉 : {detail?.date}</p>
                </div>
              </Moviedesc>
              <Bookingbut
                onClick={() => {
                  navigate("/bookmovie");
                }}
              >
                예매하기
              </Bookingbut>

              <Likebut onClick={onLike}>
                {likebtn ? "찜삭제" : "찜하기"}
              </Likebut>
            </Info>
          </Infobox>
          <Middle>
            <Desc>
              <p>{tmp3}</p>
            </Desc>
            <Ad>
              <img src="https://ifh.cc/g/bAOBgG.jpg"></img>
            </Ad>
          </Middle>
          <Ad2>
            <img src="https://adimg.cgv.co.kr//images/202208/KATURI/0908_800x90.jpg"></img>
          </Ad2>
        </Container>
      </div>
    </>
  );
};

export default MovieDetail;

const Container = styled.div`
  width: 100%;
  width: 1040px; //헤더랑 통일
  margin: 40px auto; //헤더랑 콘텐트 띄우기겸
`;
const Infobox = styled.div`
  display: flex;
  height: 280px;
  img {
    width: 200px;
  }
`;
const Info = styled.div`
  //이미지랑 info랑 가로로 나란히 두개
  margin-left: 30px;
`;
const Title = styled.div`
  display: flex;
  height: 45px;
  h3 {
    color: #1a1919;
    font-size: 25px;
    font-weight: 700;
  }
`;
const Status = styled.div`
  padding: 0 5px 0 5px;
  border: 2.2px solid #3e82a4;
  color: #3e82a4;
  margin-left: 22px;
  line-height: 23px;
  font-weight: 670;
  font-size: 12px;
  height: 23px;
`;
const Engtitle = styled.p`
  font-weight: 450;
  font-size: 13px;
  color: #666666;
  margin-bottom: 20px;
`;
const Rate = styled.div`
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  font-size: 11px;
  display: flex;
  p {
    color: #666666;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Hr = styled.hr`
  margin-top: 17px;
  margin-bottom: 13px;
  width: 750px;
`;
const Moviedesc = styled.div`
  padding-top: 5px;
  color: #333333;
  font-size: 13px;
  font-weight: 550;
  margin-bottom: 25px;
  div {
    margin-bottom: 7px;
    p {
      font-weight: 700;
    }
  }
`;
const Bookingbut = styled.button`
  margin-top: 13px;
  width: 100px;
  height: 35px;
  line-height: 30px;
  color: white;
  background-color: #fb4357;
  border-radius: 5px;
  border: #ffffff;
  font-weight: 700;
  cursor: pointer;
`;
const Likebut = styled.button`
  margin-top: 13px;
  width: 100px;
  height: 35px;
  line-height: 30px;
  color: #ffffff;
  background-color: #a8a8a8;
  border-radius: 5px;
  border: #ffffff;
  font-weight: 700;
  margin-left: 20px;
  cursor: pointer;
`;
const Middle = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  margin-top: 100px;
`;
const Desc = styled.div`
  width: 700px;
  p {
    letter-spacing: 1px; //글자 사이 간격 벌리기
    word-spacing: 2px; //단어 사이 간격 벌리기
    line-height: 150%; //줄간격
    white-space: pre-line; //자동 줄바꿈 기능
  }
`;
const Ad = styled.div`
  img {
    height: 600px;
  }
`;
const Ad2 = styled.div`
  margin-top: 30px;
  margin-bottom: 230px;
`;
