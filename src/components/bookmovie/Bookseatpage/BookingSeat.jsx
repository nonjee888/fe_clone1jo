import styled from "styled-components";
import SeatBookinginfo from "../Bookseatpage/SeatBookinginfo";
import ChoPersonscreen from "../Bookseatpage/ChPersonscreen";
import { React, useState ,useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { checkSeat } from "../../../redux/modules/booking";


const BookingSeat = () => {
  const dispatch = useDispatch();

  const Reserved = useSelector((state) => state.booking.ReservedSeat) 

  const seatData = {
    A: ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15'],
    B: ['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12','B13','B14','B15'],
    C: ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15'],
    D: ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13','D14','D15'],
    E: ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15'],
    F: ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','F13','F14','F15'],
    G: ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12','G13','G14','G15'],
    H: ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13','H14','H15'],
    I: ['I1','I2','I3','I4','I5','I6','I7','I8','I9','I10','I11','I12','I13','I14','I15'],
  }

  const [seats, setSeats] = useState(seatData)
  const [selectedSeat , setSelectedSeat] = useState('')

  const selectSeat = (id) => {      //좌석이 선택되면 선택된좌석의 id를 SelectedSeat로 만든다
      setSelectedSeat(id)
    }

  useEffect(() => {
    dispatch(checkSeat(selectedSeat))
    }, [dispatch]);


  useEffect(() => {
    dispatch(checkSeat(selectedSeat)) 
    }, [selectedSeat]);

   
 
    return (
        <>

       <AdminBody>
        <Header>인원/좌석</Header>
        <Screen>SCREEN</Screen>
        <SeatScreen>
        
        <SeatList>
        
        <Group>
        {seats.A.map((item,index) => <ChoPersonscreen key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.a&&Reserved?.a.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.B.map((item,index) => <ChoPersonscreen  key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.b&&Reserved?.b.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.C.map((item,index) => <ChoPersonscreen key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.c&&Reserved?.c.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.D.map((item,index) => <ChoPersonscreen  key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.d&&Reserved?.d.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.E.map((item,index) => <ChoPersonscreen  key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.e&&Reserved?.e.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.F.map((item,index) => <ChoPersonscreen key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.f&&Reserved?.f.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.G.map((item,index) => <ChoPersonscreen key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.g&&Reserved?.g.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.H.map((item,index) => <ChoPersonscreen  key={index}onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.h&&Reserved?.h.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        <Group>
        {seats.I.map((item,index) => <ChoPersonscreen key={index} onClick ={() =>selectSeat(item)}  reserveseat = {Reserved?.i&&Reserved?.i.includes(item)} selected = {selectedSeat === (item)}/>)}
        </Group>
        

        </SeatList>
        
        </SeatScreen>
        
       </AdminBody>

        <Bookinginfor>
          <SeatBookinginfo/>
          </Bookinginfor>
        
        </>
        ); }

;

export default BookingSeat;


const AdminBody = styled.div`
border: none;
height: 500px;
width: 1000px;
display: block;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 50px;
background: #FDFCF0;
`;

const Bookinginfor = styled.div`
border: none;
height: 150px;
background: black;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
color: white;
`;

const Header=styled.div`
background: #444444;
border: solid none;
width: 1000px;
height: 40px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: flex;
`;

const Screen=styled.div`
border: none;
margin-left: 150px;
margin-top: 30px;
width: 700px;
height: 20px;
background: #d4d3c9;
align-items: center;
justify-content: center;
display: flex;
`;

const SeatScreen=styled.div`
border: none;
margin-left: 150px;
width: 700px;
height: 380px;
align-items: center;
justify-content: center;
display: flex;
`;

const SeatList=styled.div`
border: none;
width: 500px;
height: 315px;
align-items: center;
justify-content: center;
display: block;
`;

const Group=styled.div`
border: none;
width: 500px;
height: 30px;
align-items: center;
justify-content: center;
display: flex;
`;