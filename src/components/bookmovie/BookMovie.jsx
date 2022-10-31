import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { choiceMovie } from "../../redux/modules/booking";

function BookingTime() {
  const dispatch = useDispatch();
  const [movieTitle, setMovieTitle] = useState("");
  const [movieImg, setMovieImg] = useState("https://ifh.cc/g/qV8mw6.png"); //검은배경 (img초기값 빈칸이면 뷰에 엑박뜸)

  const _data = {
    // 리듀서에 보내줄값 정의
    title: movieTitle,
    img: movieImg,
  };
  const setState = ({ Title, Img }) => {
    //onclick 시 setState를 두개 하고싶어서 (movieTitle,movieImg) 만든 함수
    setMovieTitle(Title);
    setMovieImg(Img);
  };

  useEffect(() => {
    dispatch(choiceMovie(_data)); //고른 영화제목,이미지 스토어에 넣어주는 리듀서로 이동
  }, [movieTitle]);

  return (
    <Div>
      <Movie>영화</Movie>

      <Tabmenu>
        <Tab1>
          <a href="#">전체</a>
        </Tab1>
        <Tab>
          <a href="http://www.cgv.co.kr/arthouse/">아트하우스▼</a>
        </Tab>
        <Tab>
          <a href="http://www.cgv.co.kr/theaters/special/defaultNew.aspx">
            특별관▼
          </a>
        </Tab>
      </Tabmenu>

      <Sortmenu>
        <Tab2>
          <a href="#">예매율순</a>
        </Tab2>
        <Tab2>
          <a href="#">가나다순</a>
        </Tab2>
      </Sortmenu>

      <Movielist>
        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "공조2-인터내셔날",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86155/86155_320.jpg",
              })
            }
          >
            <span>공조2-인터내셔날</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "육사오",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86059/86059_320.jpg",
              })
            }
          >
            <span>육사오</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "알라딘",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81478/81478_320.jpg",
              })
            }
          >
            <span>알라딘</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "탑건-매버릭",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg",
              })
            }
          >
            <span>탑건-매버릭</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "시맨틱 에러-더 무비",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86081/86081_320.jpg",
              })
            }
          >
            <span>시맨틱 에러-더 무비</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "인생은 뷰티풀: 비타돌체",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86189/86189_320.jpg",
              })
            }
          >
            <span>인생은 뷰티풀: 비타돌체</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "드래곤볼 슈퍼: 슈퍼 히어로",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86256/86256_320.jpg",
              })
            }
          >
            <span>드래곤볼 슈퍼: 슈퍼 히어로</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "비스트",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86222/86222_320.jpg",
              })
            }
          >
            <span>비스트</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "9명의 번역가",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86122/86122_320.jpg",
              })
            }
          >
            <span>9명의 번역가</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "헌트",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86058/86058_320.jpg",
              })
            }
          >
            <span>헌트</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "블랙폰",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86151/86151_320.jpg",
              })
            }
          >
            <span>블랙폰</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "한여름밤의 재즈",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86113/86113_320.jpg",
              })
            }
          >
            <span>한여름밤의 재즈</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "랑할 땐 누구나 최악이 된다",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86121/86121_320.jpg",
              })
            }
          >
            <span>사랑할 땐 누구나 최악이 된다</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "다 잘된 거야",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86173/86173_320.jpg",
              })
            }
          >
            <span>다 잘된 거야</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "한산-용의 출현",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83280/83280_320.jpg",
              })
            }
          >
            <span>한산-용의 출현</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "노스맨",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86049/86049_320.jpg",
              })
            }
          >
            <span>노스맨</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "성적표의 김민영",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86171/86171_320.jpg",
              })
            }
          >
            <span>성적표의 김민영</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() =>
              setState({
                Title: "극장판 주술회전 0",
                Img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86065/86065_320.jpg",
              })
            }
          >
            <span>극장판 주술회전 0</span>
          </a>
        </li>
      </Movielist>
    </Div>
  );
}

export default BookingTime;

const Div = styled.div`
  a {
    text-decoration-line: none;
    color: black;
  }
`;

const Movie = styled.div`
  background: #444444;
  border: solid none;
  width: 280px;
  height: 40px;
  color: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Tabmenu = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  height: 30px;
  color: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Sortmenu = styled.div`
  border: none;
  height: 30px;
  color: #dddddd;
  margin-left: 10px;
  font-weight: bold;
  display: flex;
`;

const Movielist = styled.div`
  border: solid 1px #dddddd;
  width: 240px;
  height: 370px;
  color: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: block;
  margin-left: 20px;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 5px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 30%);
`;

const Tab1 = styled.div`
  border: solid 1px #dddddd;
  width: 94px;
  height: 30px;
  color: #dddddd;
  background: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: small;
`;

const Tab = styled.div`
  border: solid 1px #dddddd;
  width: 94px;
  height: 30px;
  color: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: small;
`;

const Tab2 = styled.div`
  border: none;
  width: 70px;
  height: 30px;
  color: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: small;
  margin-left: 10px;
`;
