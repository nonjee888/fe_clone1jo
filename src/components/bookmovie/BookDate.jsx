import { React, useState ,useEffect} from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'; //캘린더 출력을 숫자로 바르게 정렬해주는 라이브러리
import { useSelector, useDispatch } from "react-redux";
import { choiceDate , choiceTime } from "../../redux/modules/booking";

const BookDate = () => {  
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const [check, setCheck] = useState(true);
  const Changedate = moment(value).format("YYYYMMDD")
  
  const checkList = useSelector((state) => state.booking)
  console.log(checkList)

  const title = checkList.Title
    const town = checkList.Town
    const date = Changedate
   
    const _data = { 
          title: title ,
          city: "강원",
          town: town,
          date: date,
        }

  useEffect(() => {
    dispatch(choiceDate(Changedate) )
  }, [Changedate]);

  useEffect(() => {
    if (checkList.Title !=='' && checkList.Town !=='')
    setCheck(false);} , [checkList])

    useEffect(() => {
      if (checkList.Title !=='' && checkList.Town !=='')
      dispatch(choiceTime(_data))} , [Changedate])


  return (
    <>
    <Title>날짜</Title>
    {check ?  null:
    <Calendar 
    onChange={onChange} value={value} />}
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




