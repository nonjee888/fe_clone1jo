import { React, useState ,useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { finishPay } from "../../../redux/modules/booking";

function SeatBookinginfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookingDate = useSelector((state) => state.booking)
  
  const payData = {
  title:bookingDate.Title,
  town: bookingDate.Town,
  date:bookingDate.Date,
  time: bookingDate.Time,
  seat :bookingDate.Seat,
  memberCount :1
  }
  
  
  const payhandler = () => {
    dispatch(finishPay(payData));
    navigate("/ticket");
  }

  return (
    <>
    <Bookedinfo>

    <ButtonBefore></ButtonBefore>

    <Movieposter>
    <img src={bookingDate.Img}></img>
    </Movieposter>

    <Movieinfo>

    <Movietitle>{bookingDate.Title}</Movietitle>

    </Movieinfo>

    <Bordergray></Bordergray>



    <Theaterinfo>

    <Theaterchoose>
    <span>극장 </span>
    <span>
    <a>CGV {bookingDate.Town}</a></span>
    </Theaterchoose>

    <DateChoose>
    <span>일시</span>
    <span>{bookingDate.Date}</span>
    </DateChoose>

  
    </Theaterinfo>

    <Bordergray></Bordergray>

    <SeatChoose>
    <span>좌석 </span>
    <span>{bookingDate.Seat}</span>
    </SeatChoose>

    <Bordergray></Bordergray>


    

    
    <Button type="button" onClick={payhandler}>

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
overflow: hidden;
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
overflow: hidden;
`;