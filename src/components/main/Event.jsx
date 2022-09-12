import React from "react";
import styled from "styled-components";

function Event() {
  return (
    <div>
      <EventWrap>
        <EventContents>
          <TitleWrap>
            <H3>EVENT</H3>
            <Button4>전체보기</Button4>
          </TitleWrap>
          <EventList>
            <SwiperEventList>
              <EventCard1>
                <Event1 />
                <Strong>[탑건]IMAX 라스트 특가</Strong>
                <P>2022.08.29~2022.09.23</P>
              </EventCard1>
              <EventCard2>
                <Event2 />
                <Strong>[귀멸의 칼날: 장구저택 편]필름마크</Strong>
                <P>2022.09.07~2022.10.02</P>
              </EventCard2>
              <EventCard3>
                <Event3 />
                <Strong>[공조2: 인터내셔날]무비 스펙트럼프 카드</Strong>
                <P>2022.09.08~2022.10.02</P>
              </EventCard3>
            </SwiperEventList>
          </EventList>
        </EventContents>
      </EventWrap>
    </div>
  );
}

export default Event;

const EventWrap = styled.div`
  height: 329px;
  width: 1041px;
  margin: 0 auto;
`;
const EventContents = styled.div`
  height: 329px;
  width: 980px;
  margin: 0 auto;
  padding: 30px 0 6px;
`;
const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
`;
const H3 = styled.h3`
  margin-top: 5px;
  height: auto;
  width: 100%;
  font-size: 26px;
  font-weight: 700;
`;
const Button4 = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #e2e2e2;
  background: none;
  cursor: pointer;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 5%);
`;
const EventList = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 273px;
  margin-top: 19px;
  margin-left: -30px;
  padding: 0 30px;
`;
const SwiperEventList = styled.div`
  width: 980px;
  height: 272px;
  display: flex;
`;
const EventCard1 = styled.div`
  width: 310px;
  height: 100%;
`;
const EventCard2 = styled.div`
  margin-left: 20px;
  width: 310px;
  height: 100%;
`;
const EventCard3 = styled.div`
  margin-left: 20px;
  width: 310px;
  height: 100%;
`;
const Event1 = styled.div`
  width: 310px;
  height: 207px;
  border-radius: 15px;
  border: solid 1px #eeee;
  margin-bottom: 10px;
  background-image: url("https://img.cgv.co.kr/WebApp/contents/eventV4/35281/16624426918860.jpg");
  background-size: cover;
`;
const Event2 = styled.div`
  width: 310px;
  height: 207px;
  border-radius: 15px;
  border: solid 1px #eeee;
  margin-bottom: 10px;
  background-image: url("https://img.cgv.co.kr/WebApp/contents/eventV4/35295/16625166248960.jpg");
  background-size: cover;
`;
const Event3 = styled.div`
  width: 310px;
  height: 207px;
  border-radius: 15px;
  border: solid 1px #eeee;
  margin-bottom: 10px;
  background-image: url("https://img.cgv.co.kr/WebApp/contents/eventV4/35316/16626139430970.jpg");
  background-size: cover;
`;
const Strong = styled.strong``;
const P = styled.p`
  font-size: 14px;
`;
