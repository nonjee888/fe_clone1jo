import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function BookingTime() {

  return (
    <>
    <TimeHeader>시간</TimeHeader>
    <TimeTable>
      <Time><h1>08:00</h1> <p>남은좌석 22석</p></Time>
      <Time><h1>12:00</h1> <p>남은좌석 122석</p></Time>
      </TimeTable>
     
    
    </>
  )
  
}

export default BookingTime;

const TimeHeader=styled.div`
background: #444444;
border: solid none;
width: 165px;
height: 40px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
`;

const TimeTable=styled.div`
border: none;
margin-top: 20px;
margin-left: 18px;
width: 130px;
height: 437px;
font-weight: bold;
display: block;
overflow: scroll;
overflow-x: hidden;
text-align : center;
`;

const Time=styled.div`
border: solid 1px gray;
border-radius: 20px;
margin-bottom: 20px;
width: 120px;
height: 60px;
font-weight: bold;
/* align-items: center;
justify-content: center; */
/* display: block; */
text-align: center;
line-height : 25px;
box-shadow: 0 2px 5px 1px rgb(64 60 67 / 30%);
color: gray;
&:hover {
  color: red;
}
p{
  font-size: 11px;
}
h1{
  font-size: 25px;
  margin-top: 8px;
}
`;