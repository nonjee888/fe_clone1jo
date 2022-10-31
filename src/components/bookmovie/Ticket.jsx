import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footers from "../layout/Footers";

function Ticket() {
  const navigate = useNavigate();
  const bookingDate = useSelector((state) => state.booking); //결제완료에 붙여줄 정보들 스토어에서 가져오기

  return (
    <>
      <Body>
        <TicketHeader>결제 완료</TicketHeader>
        <Ticketinfo>
          <PaymentDone>결제가 완료 되었습니다.</PaymentDone>
          <Movieinfo>
            <Poster>
              <img src={bookingDate.Img}></img>
            </Poster>
            <Theater>
              <Theaterinfo>
                <Movietitle>{bookingDate.Title}</Movietitle>
                <Theaterchoose>
                  <span>극장 </span>
                  <span>{bookingDate.Town}</span>
                </Theaterchoose>

                <DateChoose>
                  <span>일시 </span>
                  <span>{bookingDate.Date}</span>
                </DateChoose>

                <DateChoose>
                  <span>시간 </span>
                  <span>{bookingDate.Time}</span>
                </DateChoose>

                <NumberChoose>
                  <span>인원 </span>
                  <span>1명</span>
                </NumberChoose>

                <SeatChoose>
                  <span>좌석 </span>
                  <span>{bookingDate.Seat}</span>
                </SeatChoose>
              </Theaterinfo>

              <Print>
                <Button1
                  type="button"
                  onClick={() => {
                    navigate("/movielist");
                  }}
                >
                  예매정보 출력
                </Button1>
                <Button2
                  type="button"
                  onClick={() => {
                    navigate("/movielist");
                  }}
                >
                  예매결과 SMS발송
                </Button2>
                <Button3
                  type="button"
                  onClick={() => {
                    navigate("/movielist");
                  }}
                >
                  예매확인/취소
                </Button3>
              </Print>
            </Theater>
          </Movieinfo>
          <Border></Border>
          <Warning>
            <Warning1>
              <img src="http://img.cgv.co.kr/CGV_RIA/Ticket/image/reservation/step4/text_ticket_instructions.png"></img>
            </Warning1>

            <ul>
              <li>
                CJ ONE 포인트는 상영일 익일 적립됩니다.
                <em>(영화관람권, 비회원 예매 제외)</em>
              </li>
              홈티켓 출력 시, 별도의 티켓 발권 없이 바로 입장 가능합니다.
              <br />
              <em>
                (그 외에는 신분증 소지 후, 티켓판매기 혹은 매표소에서 티켓을
                발권 받으셔야 합니다)
              </em>
              <li>영화 상영 스케줄은 영화관사정에 의해 변경될 수 있습니다.</li>
              <li>
                비회원 예매하신 경우는 예매내역이 이메일로 발송되지 않습니다.
              </li>
            </ul>
          </Warning>
        </Ticketinfo>
      </Body>
      <Footers />
    </>
  );
}

export default Ticket;

const Body = styled.div`
  border: none;
  height: 600px;
  width: 1000px;
  display: block;
  margin: auto;
  margin-top: 50px;
  background: #fdfcf0;
`;

const TicketHeader = styled.div`
  background: #444444;
  border: none;
  width: 1000px;
  height: 40px;
  color: #dddddd;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Ticketinfo = styled.div`
  border: none;
  height: 500px;
  width: 900px;
  display: block;
  margin-left: 55px;
  margin-top: 10px;
`;

const PaymentDone = styled.div`
  border: none;
  height: 90px;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
`;

const Movieinfo = styled.div`
  border: none;
  height: 300px;
  width: 900px;
  display: flex;
`;

const Poster = styled.div`
  border: none;
  height: 250px;
  width: 200px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const Theater = styled.div`
  border: none;
  height: 300px;
  width: 650px;
  display: block;
  margin-left: 55px;
`;

const Border = styled.div`
  border: solid 1px gray;
  background-color: gray;
  width: 900px;
  display: block;
  margin-top: 10px;
`;

const Theaterinfo = styled.div`
  border: none;
  height: 200px;
  width: 650px;
  display: block;
`;

const Print = styled.div`
  border: none;
  height: 95px;
  width: 650px;
  display: flex;
`;

const Movietitle = styled.div`
  width: 150px;
  height: 30px;
  font-size: large;
  font-weight: bold;
`;

const Theaterchoose = styled.div`
  border: none;
  width: 400px;
  height: 30px;
  font-weight: bold;
`;

const DateChoose = styled.div`
  border: none;
  width: 250px;
  height: 30px;
  font-weight: bold;
`;

const NumberChoose = styled.div`
  border: none;
  width: 250px;
  height: 30px;
  font-weight: bold;
  font-size: medium;
`;

const SeatChoose = styled.div`
  border: none;
  width: 250px;
  height: 20px;
  font-weight: bold;
  font-size: medium;
  margin-bottom: 10px;
`;

const Payment = styled.div`
  border: none;
  width: 250px;
  height: 30px;
  font-weight: bold;
  font-size: medium;
`;

const Button1 = styled.div`
  border: none;
  height: 80px;
  width: 200px;
  margin-top: 15px;
  border-radius: 20px;
  background-color: #b90000;
  color: white;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 80px;
`;

const Button2 = styled.div`
  height: 80px;
  width: 200px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 20px;
  background-color: #333;
  color: white;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 80px;
`;

const Button3 = styled.div`
  border: none;
  height: 80px;
  width: 200px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 20px;
  background-color: #333;
  color: white;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 80px;
`;

const Warning = styled.div`
  border: none;
  width: 900px;
  height: 125px;
  font-weight: bold;
  font-size: medium;
  display: flex;
`;

const Warning1 = styled.div`
  border: none;
  width: 150px;
  height: 25px;
  font-weight: bold;
  font-size: medium;
  display: flex;
  margin-top: 20px;
`;
