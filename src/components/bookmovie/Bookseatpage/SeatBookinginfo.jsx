import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SeatBookinginfo() {
  const navigate = useNavigate();

  return (
    <>
    <Bookedinfo>

    <ButtonBefore type="button" onClick={() => {navigate("/bookmovie");}}></ButtonBefore>

    <Movieposter>
    <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81478/81478_185.JPG"
     alt="영화 포스터"></img>
    </Movieposter>

    <Movieinfo>

    <Movietitle>
    <a href="http://www.cgv.co.kr/movies/detail-view/?midx=81478"
     target="_blank" onmousedown="javascript:logClick('SUMMARY/영화상세보기');"
      title="알라딘">알라딘</a>
    </Movietitle>

    <Movietype>
				<span class="data ellipsis-line1" title="4DX 2D(자막)">4DX 2D(자막)</span>
				
    </Movietype>

    <Movierating>
    <span class="data" title="전체 관람가">전체 관람가</span>
		</Movierating>

    </Movieinfo>

    <Bordergray></Bordergray>



    <Theaterinfo>

    <Theaterchoose>
    <span class="header">극장 </span>
    <span class="data letter-spacing-min ellipsis-line1">
    <a href="http://www.cgv.co.kr/theaters/?theaterCode=0013"
     target="_blank" onmousedown="javascript:logClick('SUMMARY/극장상세보기');"
      title="CGV 용산아이파크몰">CGV 용산아이파크몰 </a></span>
    </Theaterchoose>

    <DateChoose>
    <span class="header">일시 </span>
    <span class="data" title="2022.9.10(토) 25:05">2022.9.10(토) 25:05</span>
    </DateChoose>

    <Screenchoose>
    <span class="header">상영관 </span>
    <span class="data" title="4DX관 (Laser)">4DX관 (Laser)</span>
    </Screenchoose>

    <NumberChoose>
    <span class="header">인원 </span>
    <span class="data" title="1명">1명</span>
    </NumberChoose>

    </Theaterinfo>

    <Bordergray></Bordergray>

    <SeatChoose>
    <span class="header">좌석 </span>
    <span class="data" title="A1">A1</span>
    </SeatChoose>

    <Bordergray> 
    </Bordergray>

    <Payment>
      <span class="header">금액 </span>
      <span class="data" title="20,000원">20,000원</span>
    </Payment>

    

    
    <Button type="button" onClick={() => {navigate("/ticket");}}>

    </Button>
      




    </Bookedinfo>
    </>
  )
  
}

export default SeatBookinginfo;

const Bookedinfo=styled.div`
border: none;
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
border: none
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

const SeatChoose=styled.div`
margin-left: 10px;
border: none;
width: 170px;
height: 0px;
font-weight: bold;
font-size: small;
`;

const Payment=styled.div`
border: none;
width: 170px;
height: 30px;
font-weight: bold;
font-size: small;
margin-left: 10px;
color: red;
`;


const Button = styled.div`
border: none;
height: 110px;
width: 240px;
border-radius: 20px;
background-image: url("http://img.cgv.co.kr/CGV_RIA/Ticket/image/reservation/tnb/tnb_buttons.png");
background-repeat: no-repeat;
backgroundPosition: '0 0';
overflow: hidden;
textIndent: -1000px;
background-position: 0 -550px;
`;

const ButtonBefore = styled.div`
border: none;
height: 110px;
width: 120px;
border-radius: 20px;
margin-right: 20px;
background-image: url("http://img.cgv.co.kr/CGV_RIA/Ticket/image/reservation/tnb/tnb_buttons.png");
background-repeat: no-repeat;
backgroundPosition: '0 0';
overflow: hidden;
textIndent: -1000px;
`;