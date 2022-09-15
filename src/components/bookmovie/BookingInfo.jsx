import { React, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { choiceSeat } from "../../redux/modules/booking";

function Bookinginfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const choiceList = useSelector((state) => state.booking)

  const seatData = {
  "title": choiceList.Title,
  "town": choiceList.Town,
  "date": choiceList.Date,
  "time": choiceList.Time,
  }

  const selectSeat = () => {
    dispatch(choiceSeat(seatData));      //내가 고른 영화정보를 보내주면서 해당 영화 상영시간의 좌석정보를 받아옴
    navigate("/seat") ;                   //좌석선택 버튼을 누르면 실행됨
  };

  return (
    <>
    <Bookedinfo>
        <Movieposter>
        <img src={choiceList.Img}></img>
        </Movieposter>

        <Movieinfo>
          <Movietitle><a>{choiceList.Title}</a></Movietitle>
        </Movieinfo>

        <Bordergray></Bordergray>

        <Theaterinfo>
            <Theaterchoose>
            <span>극장 </span>
            <span><a>CGV {choiceList.Town} </a></span>
            </Theaterchoose>

            {/* <DateChoose>                  //캘린더 기본값때문에 일시가 선택안해도 보여서 주석처리
            <span>일시 </span>
            <span>{choiceList.Date}</span>
            </DateChoose> */}         
        </Theaterinfo>

        <Bordergray></Bordergray>

        <Andmore>
        <span>▷ 좌석선택 </span>
        <span>▷ 결제</span>
        </Andmore>

        <Button type="button" onClick={selectSeat}></Button>
        
    </Bookedinfo>
    </>
  )
  
}

export default Bookinginfo;

const Bookedinfo=styled.div`
border: none;
width: 1000px;
height: 120px;
display: flex;
`;

const Movieposter=styled.div`
border: none;
width: 100px;
height: 120px;
overflow: hidden;
& img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

const Movietitle=styled.div`
border: none;
width: 130px;
height: 60px;
font-size: large;
font-weight: bold;
`;

const Movierating=styled.div`
border: none;
width: 130px;
height: 30px;
font-size:  small;
`;

const Movietype=styled.div`
border: none;
width: 130px;
height: 30px;
font-size:  small;
`;

const Movieinfo=styled.div`
border: none;
width: 130px;
height: 120px;
margin-left: 10px;
display: block;
`;

const Bordergray=styled.div`
border: solid 0.1px gray;
height: 120px;
margin-left: 5px;
`;

const Theaterinfo=styled.div`
border: none;
width: 170px;
height: 120px;
margin-left: 10px;
display: block;
font-size:  small;
`;

const Theaterchoose=styled.div`
border: none;
width: 170px;
height: 30px;
font-weight: bold;
`;

const DateChoose=styled.div`
border: none;
width: 170px;
height: 30px;
font-weight: bold;
`;

const Screenchoose=styled.div`
border: none;
width: 170px;
height: 30px;
font-weight: bold;
`;

const NumberChoose=styled.div`
border: none;
width: 170px;
height: 30px;
font-weight: bold;
`;

const Andmore=styled.div`
border: none;
width: 350px;
height: 50px;
margin-left: 5px;
font-size: xx-large;
text-align : center;
margin-top: 32px;
color: gray;
font-weight: bold;
`;

const Button = styled.div`
border: none;
height: 110px;
width: 120px;
margin-left: 160px;
border-radius: 20px;
background-image: url("http://img.cgv.co.kr/CGV_RIA/Ticket/image/reservation/tnb/tnb_buttons.png");
background-repeat: no-repeat;
overflow: hidden;
background-position: 0 -220px;
`;