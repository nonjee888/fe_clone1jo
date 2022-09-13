import styled from "styled-components";
import SeatBookinginfo from "../Bookseatpage/SeatBookinginfo";
import ChoPersonscreen from "../Bookseatpage/ChPersonscreen";


const BookingSeat = () => {

    return (
        <>

       <AdminBody>
        <Header>인원/좌석</Header>
          <ChoPersonscreen/>
        
        
       </AdminBody>

        <Bookinginfor>
          <SeatBookinginfo/>
          </Bookinginfor>
        
        </>
        );
};

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

