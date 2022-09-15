import { React, useState ,useEffect} from "react";
import styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { choiceTime } from "../../redux/modules/booking";

function BookingTime() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());     //캘린더 라이브러리 (선택한날짜를 value로 받음)
 
  useEffect(() => {
    dispatch(choiceTime(value))         //선택한 정보들에 맞는 상영시간 서버에서 get해오는 함수로 이동
  }, [value]);

  const timeList = useSelector((state) => state.booking.Res)   //useEffect로 스토어에 넣은 영화시간 꺼내기

  return (
    <>
    <TimeHeader>시간</TimeHeader>
    <TimeTable>
      {timeList?.map((time)=> {
        return <Time onClick={()=>setValue(time.time)} value={time.time} key={time.time}><h1>{time.time}</h1> <p>남은좌석 {time.seat}석 </p> </Time>
        })}
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

const Time=styled.button`
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