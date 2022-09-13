import { React, useState ,useEffect} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { choiceCinema } from "../../redux/modules/booking";

function BookCinema() {
  const [movieCinema, setMovieCinema] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(choiceCinema(movieCinema))
  }, [movieCinema]);

  return  (
    <>
    <Cinema>극장</Cinema>


    <Cinemalist>
      
      <li>
        <a href="#" onClick={()=>setMovieCinema("강남")}>
            <span>강남</span>
            </a></li>

      <li>
        <a href="#" onClick={()=>setMovieCinema("춘천")}>
            <span>춘천</span>
            </a></li>

 

            
      
                     
          </Cinemalist>
    </>
  )
}

export default BookCinema;

const Cinema=styled.div`
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

const Cinemalist=styled.div`
border: solid 1px #dddddd ;
box-shadow: 0 2px 5px 1px rgb(64 60 67 / 30%);
width: 240px;
height: 435px;
color: #dddddd;
font-weight: bold;
align-items: center;
justify-content: center;
display: block;
margin-left: 20px;
overflow: scroll;
overflow-x: hidden;
margin-top: 20px;
`;