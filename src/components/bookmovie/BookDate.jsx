import React, { useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const BookDate = () => {  
  const [value, onChange] = useState(new Date());


  return (
    <>
    <Title>날짜</Title>
    <Calendar onChange={onChange} value={value} />
    </>
  )
}

export default BookDate;

const Title=styled.div`
background: #444444;
border: solid none;
height: 40px;
margin-bottom: 50px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
`;




