//import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BookMovie from "../bookmovie/BookMovie";
import BookCinema from "../bookmovie/BookCinema"
import BookDate from "../bookmovie/BookDate"
import BookingTime from "../bookmovie/BookingTime"
import Bookinginfo from "../bookmovie/BookingInfo"


const BookMovieLayout = () => {

  return (
    <>
        <Body>

            <AddBookMovie> 
                <BookMovie/>
            </AddBookMovie>

            <AddBookCinema>
                <BookCinema/>
            </AddBookCinema>

            <AddBookDate>
            <BookDate/>
            </AddBookDate>

            <AddBookTime>
            <BookingTime/>
            </AddBookTime>


            
          
        </Body>

        {/* <Bookinginfor>
            <Bookinginfo/>    
        </Bookinginfor> */}
    </>
  );
};

export default BookMovieLayout;


const Body = styled.div`
border: none;
height: 500px;
width: 1000px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 50px;
background: #FDFCF0;
`;

const AddBookMovie=styled.div`
border: solid 1px #DDDDDD;
width: 280px;
height: 497px;
`;

const AddBookCinema=styled.div`
border: solid 1px #DDDDDD;
width: 280px;
height: 497px;
`;

const AddBookDate=styled.div`
border: solid 1px #DDDDDD;
width: 270px;
height: 497px;
`;

const AddBookTime=styled.div`
border: solid 1px #DDDDDD;
width: 165px;
height: 497px;
`;

//319
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
