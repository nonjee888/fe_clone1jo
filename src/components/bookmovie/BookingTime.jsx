import React from "react";
import styled from "styled-components";

function BookingTime() {

  return (
    <>
    <TimeHeader>시간</TimeHeader>
    <TimeTable>
      <Time>08:00</Time>
      <Time>12:45</Time>
      <Time>14:20</Time>
      <Time>16:50</Time>
      <Time>19:35</Time>
      <Time>20:10</Time>
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
height: 65px;
font-weight: bold;
align-items: center;
justify-content: center;
display: block;
font-size: xx-large;
text-align: center;
line-height : 60px;
box-shadow: 0 2px 5px 1px rgb(64 60 67 / 30%);
color: gray;
&:hover {
  color: red;
}
`;