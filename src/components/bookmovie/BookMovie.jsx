import { React, useState ,useEffect} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { choiceMovie } from "../../redux/modules/booking";

function BookingTime() {
  
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(choiceMovie(movieTitle))
  }, [movieTitle]);

  return (
    <>
    <Movie>영화</Movie>

    <Tabmenu>
      <Tab1>
    <span></span>
    <a href="#">
      전체</a>
      </Tab1>

      <Tab>
    <span></span>
    <a href="http://www.cgv.co.kr/arthouse/">
      아트하우스▼</a>
    </Tab>

      <Tab>
      <span></span>
      <a href="http://www.cgv.co.kr/theaters/special/defaultNew.aspx">
        특별관▼</a>
        </Tab>

    </Tabmenu>

    <Sortmenu>

      <Tab2>
      <a href="#" 
      id="movieSortRankBtn">예매율순</a>
      </Tab2>

      <Tab2>
      <a href="#" 
      id="movieSortNameBtn">가나다순</a>
      </Tab2>
    </Sortmenu>
    {/* onclick={setMovieTitle("공조2-인터네셔날")} */}
    <Movielist>
      
            <li>
            <a href="#" onClick={()=>setMovieTitle("공조2-인터내셔날")}>
            <span>공조2-인터내셔날</span>
            </a></li>

           <li>
            <a href="#" onClick={()=>setMovieTitle("육사오")}>
            <span>육사오</span>
            </a></li>

            <li>
            <a href="#" onClick={()=>setMovieTitle("알라딘")}>
            <span>알라딘</span>
            </a></li>

            <li>
            <a href="#" onClick={()=>setMovieTitle("탑건-메버릭")}>
            <span>탑건-메버릭</span>
            </a></li>

    </Movielist>
    </>
  )
  
}

export default BookingTime;

const Movie=styled.div`
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

const Tabmenu=styled.div`
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

const Sortmenu=styled.div`
border:  none;
height: 30px;
color: #dddddd;
margin-left: 10px;
font-weight: bold;
display: flex;
`;

const Movielist=styled.div`
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

const Tab1=styled.div`
border: solid 1px #dddddd;
width: 94px;
height: 30px;
color: #dddddd;
background:  #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
font-size: small;
`;

const Tab=styled.div`
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

const Tab2=styled.div`
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



