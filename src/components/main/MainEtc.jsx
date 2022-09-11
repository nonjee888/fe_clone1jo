import React from "react";
import styled from "styled-components";
import "./style.css";

function MainEtc() {
  return (
    <Div>
      <Div>
        {/*특별관*/}
        <SpecialWrap>
          <SpecialContent>
            <TitleWrap>
              <H3>특별관</H3>
              <Button4>전체보기</Button4>
            </TitleWrap>
            <SpecialHallcontent>
              {/*특별관 슬라이더*/}
              <SliderBox>
                <ImageWrap>
                  <SpHallImages />
                </ImageWrap>
              </SliderBox>
              {/*특별관 리스트*/}
              <ul class="SpecialHallList">
                <li class="List1">
                  <img
                    class="SuiteCinema"
                    src="https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png"
                  ></img>
                  <Strong3>SUITE CINEMA</Strong3>
                  <Span1>#호텔 컨셉의 프리미엄관</Span1>
                </li>
                <li class="List1">
                  <img
                    class="SuiteCinema"
                    src="https://img.cgv.co.kr//Front/Main/2022/0616/16553622935690.png"
                  ></img>
                  <Strong3>CINE & LIVINROOM</Strong3>
                  <Span1>#신개념 소셜 상영관</Span1>
                </li>
                <li class="List1">
                  <img
                    class="SuiteCinema"
                    src="https://img.cgv.co.kr//Front/Main/2021/1130/16382612660240.png"
                  ></img>
                  <Strong3>4DX</Strong3>
                  <Span1>#모션시트 #오감체험</Span1>
                </li>
                <li class="List1">
                  <img
                    class="SuiteCinema"
                    src="https://img.cgv.co.kr//Front/Main/2021/1130/16382612660560.png"
                  ></img>
                  <Strong3>CINE de CHEF</Strong3>
                  <Span1>#쉐프가 있는 영화관</Span1>
                </li>
              </ul>
            </SpecialHallcontent>
          </SpecialContent>
        </SpecialWrap>
      </Div>
      {/*etc Table*/}
      <EtcTable>
        <Contents>
          <GiftconList>
            {/*영화관람권*/}
            <InnerWrap1>
              <Inner1>
                <Header1>
                  영화관람권
                  <Button>더보기</Button>
                </Header1>
                <InnerBox>
                  <Img11 />
                  <GifticonTitle>
                    <GifticonSpan>CGV 영화관람권</GifticonSpan>
                    <Strong>12,000원</Strong>
                  </GifticonTitle>
                </InnerBox>
                <InnerBox2>
                  <Img12 />
                  <GifticonTitle2>
                    <GifticonSpan>CGV 골드클래스</GifticonSpan>
                    <Strong>40,000원</Strong>
                  </GifticonTitle2>
                </InnerBox2>
                <InnerBox2>
                  <Img13 />
                  <GifticonTitle2>
                    <GifticonSpan>4DX관람권</GifticonSpan>
                    <Strong>19,000원</Strong>
                  </GifticonTitle2>
                </InnerBox2>
              </Inner1>
            </InnerWrap1>
            {/*기프트카드*/}
            <InnerWrap1>
              <Inner1>
                <Header1>
                  기프트카드
                  <Button>더보기</Button>
                </Header1>
                <InnerBox>
                  <Img21 />
                  <GifticonTitle>
                    <GifticonSpan>PACONNIE A형</GifticonSpan>
                    <Strong>금액충전형</Strong>
                  </GifticonTitle>
                </InnerBox>
                <InnerBox2>
                  <Img22 />
                  <GifticonTitle2>
                    <GifticonSpan>PACONNIE B형</GifticonSpan>
                    <Strong>금액충전형</Strong>
                  </GifticonTitle2>
                </InnerBox2>
                <InnerBox2>
                  <Img23 />
                  <GifticonTitle2>
                    <GifticonSpan>PACONNIE C형</GifticonSpan>
                    <Strong>금액충전형</Strong>
                  </GifticonTitle2>
                </InnerBox2>
              </Inner1>
            </InnerWrap1>
            {/*팝콘*/}
            <InnerWrap3>
              <Inner3>
                <Header3>
                  콤보<Button3>더보기</Button3>
                </Header3>
                <InnerBox>
                  <Img31 />
                  <GifticonTitle>
                    <GifticonSpan>CGV 영화관람권</GifticonSpan>
                    <Strong>9,000원</Strong>
                  </GifticonTitle>
                </InnerBox>
                <InnerBox2>
                  <Img32 />
                  <GifticonTitle2>
                    <GifticonSpan>CGV 골드클래스</GifticonSpan>
                    <Strong>12,000원</Strong>
                  </GifticonTitle2>
                </InnerBox2>
                <InnerBox2>
                  <Img33 />
                  <GifticonTitle2>
                    <GifticonSpan>CGV 골드클래스</GifticonSpan>
                    <Strong>46,000원</Strong>
                  </GifticonTitle2>
                </InnerBox2>
              </Inner3>
            </InnerWrap3>
          </GiftconList>
        </Contents>
      </EtcTable>
      {/*공지사항*/}
      <SpecialWrap>
        <NoticeWrap>
          <NoticeBox1>
            <NoticeContents>
              <Strong>공지사항</Strong>
              <A>[기타]22년 VIP 선정 기준 변경 및 추가 기준 관련 안내</A>
              <ButtonMore>더보기</ButtonMore>
            </NoticeContents>
            {/*고객센터*/}
            <NoticeContents2>
              <Strong>고객센터</Strong>
              <Customer>
                <Strong>1544-1122</Strong>
                <P>
                  고객센터 운영시간 (평일 09:00~18:00)
                  <P>업무시간 외 자동응답 안내 가능합니다.</P>
                </P>
              </Customer>
              <ButtonMore>더보기</ButtonMore>
            </NoticeContents2>
            {/*버튼즈*/}
            <Buttons>
              <Buttons1>FAQ</Buttons1>
              <Buttons2>1:1 문의</Buttons2>
              <Buttons3>대관/단체 문의</Buttons3>
            </Buttons>
          </NoticeBox1>
          {/*앱다운로드*/}
          <NoticeBox2>
            <Strong2>앱 다운로드</Strong2>
            <Span>CGV앱에서 더 편리하게 이용하세요</Span>
            <QrCode />
            <Span2>QR코드를 스캔하고</Span2>
            <Span3>앱설치 페이지로 바로 이동하세요</Span3>
          </NoticeBox2>
          {/*슬라이더*/}
          <NoticeBox3 />
        </NoticeWrap>
      </SpecialWrap>
    </Div>
  );
}

export default MainEtc;
//특별관
const SpecialWrap = styled.div`
  /* font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif; */
  padding: 60px 0 21px;
  height: 400.92px;
  vertical-align: baseline;
`;
const SpecialContent = styled.div`
  height: 319.92px;
  width: 980px;
  margin: 0 auto;
`;
const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
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
const SpecialHallcontent = styled.div`
  position: relative;
  width: 100%;
  height: 264px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`;
const SliderBox = styled.a`
  display: flex;
  overflow: hidden;
  width: 500px;
  float: left;
  border-radius: 10px;
`;
const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const SpHallImages = styled.image`
  cursor: pointer;
`;
const Strong3 = styled.div`
  color: #222;
  font-size: 20px;
  line-height: 1.444em;
  width: 200px;
  height: 20px;
`;
const Span1 = styled.span`
  font-weight: 600;
  width: auto;
  height: auto;
  border-radius: 5px;
  background-color: #f6f6f6;
  padding: 2px 7px;
  font-size: 14px;
  color: #666;
  line-height: 1.429em;
`;
// const SpecialHallList = styled.ul`
//   position: relative;
//   overflow: hidden;
//   width: 440px;
//   height: 100%;
//   float: right;
// `;
// const List1 = styled.li`
//   width: 395px;
//   height: 25px;
//   background: none;
//   border-top: 1px solid #e4e4e4;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 19px 25px 19px 19px;
//   &:hover {
//     font-size: 18px;
//     border: 1px solid black;
//     border-radius: 10px;
//     cursor: pointer;
//   }
// `;
// const List2 = styled.li`
//   width: 395px;
//   height: 25px;
//   background: none;
//   border-top: 1px solid #e4e4e4;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 19px 25px 19px 19px;
//   &:hover {
//     font-size: 18px;
//     border: 1px solid black;
//     border-radius: 10px;
//     cursor: pointer;
//   }
// `;

// const List3 = styled.li`
//   width: 395px;
//   height: 25px;
//   background: none;
//   border-top: 1px solid #e4e4e4;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 19px 25px 19px 19px;
//   &:hover {
//     font-size: 18px;
//     border: 1px solid black;
//     border-radius: 10px;
//     cursor: pointer;
//   }
// `;
// const List4 = styled.li`
//   width: 395px;
//   height: 25px;
//   background: none;
//   border-top: 1px solid #e4e4e4;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 19px 25px 19px 19px;
//   &:hover {
//     font-size: 18px;
//     border: 1px solid black;
//     border-radius: 10px;
//     cursor: pointer;
//   }
// `;
const Div = styled.div``;
const EtcTable = styled.div`
  display: flex;
  height: 436px;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  font-size: 100%;
  vertical-align: baseline;
  word-break: break-all;
`;
const Contents = styled.div`
  width: 100%;
  height: 376px;
  margin: 0 auto;
`;
const GiftconList = styled.ul`
  height: 376px;
  width: 980px;
  display: flex;
  overflow: hidden;
  list-style: none;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  font-size: 100%;
  margin: auto;
  padding: 0;
  border: 0;
  word-break: break-all;
  list-style-type: disc;
  margin-block-start: 2em;
`;
const Header1 = styled.div`
  width: 270px;
  height: 29px;
  display: flex;
  float: left;
  align-items: center;
`;
const Header3 = styled.div`
  width: 270px;
  height: 29px;
  display: flex;
  float: left;
  align-items: center;
`;
const Button = styled.button`
  width: 65.13px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  background: none;
  margin-left: 120px;
  display: inline-block;
  align-items: center;
  cursor: pointer;
`;
const Button3 = styled.button`
  width: 65.13px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  background: none;
  margin-left: 160px;
  display: inline-block;
  align-items: center;
  cursor: pointer;
`;
const InnerWrap1 = styled.div`
  width: 30%;
  height: 376px;
  border: solid 1px #e4e4e4;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 0 0 25px;
  padding: 20px 19px 30px;
`;
const InnerWrap3 = styled.div`
  width: 30%;
  height: 376px;
  border: solid 1px #e4e4e4;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 0 0 25px;
  padding: 20px 19px 30px;
`;
const Inner1 = styled.div`
  width: 250px;
  height: 324px;
`;
const Inner3 = styled.div`
  width: 250px;
  height: 324px;
`;
const InnerBox = styled.div`
  width: 250px;
  height: 76px;
  margin-top: 40px;
  vertical-align: baseline;
  display: flex;
  cursor: pointer;
`;
const InnerBox2 = styled.div`
  width: 250px;
  height: 76px;
  margin-top: 20px;
  display: flex;
  vertical-align: baseline;
  cursor: pointer;
`;
const Img11 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/16094706927780.jpg");
`;
const Img12 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15458911951520.jpg");
`;
const Img13 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/16105061088530.jpg");
`;
const Img21 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15814124358590.jpg");
`;
const Img22 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15814158039890.jpg");
`;
const Img23 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15814162227570.jpg");
`;
const Img31 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15463252009160.jpg");
`;
const Img32 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15463251537260.jpg");
`;
const Img33 = styled.div`
  margin-top: 10px;
  width: 76px;
  height: 76px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/GiftStore/Product/Pc/List/15464065561050.jpg");
`;
const GifticonTitle = styled.div`
  width: 150px;
  height: 76px;
  margin-left: 15px;
  margin-top: 30px;
`;
const GifticonTitle2 = styled.div`
  width: 150px;
  height: 76px;
  margin-left: 15px;
  margin-top: 30px;
`;
const GifticonSpan = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #222;
  line-height: 1.429em;
`;
const Strong = styled.strong``;

const NoticeWrap = styled.div`
  ////////// 별표
  height: 238px;
  display: flex;
  /* width: 980px; */
  margin: 0 auto;
  justify-content: center;
`;
const NoticeBox1 = styled.div`
  padding: 24px 26px 20px 30px;
  height: 198px;
  width: 395px;
  border: 1px solid #e4e4e4;
  border-radius: 15px 0 0 15px;
`;
const NoticeBox2 = styled.div`
  padding: 9px 23px 20px 30px;
  width: 180px;
  height: 212px;
  border: 1px solid #e4e4e4;
  border-radius: 0 15px 15px 0;
`;
const NoticeBox3 = styled.div`
  margin-left: 30px;
  width: 210px;
  height: 240px;
  border: 1px solid #e4e4e4;
  border-radius: 15px;
  background-image: url("https://img.cgv.co.kr/Front/Main/2021/1227/16405823683780.png");
`;
const NoticeContents = styled.div`
  width: 400px;
  height: 46px;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  line-height: 1.2;
`;
const A = styled.a`
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 255px;
  height: 20px;
  line-height: 1.429em;
  vertical-align: baseline;
  float: left;
  cursor: pointer;
`;
const ButtonMore = styled.button`
  margin-left: 10px;
  width: 65.13px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  background: none;
  display: inline-block;
  cursor: pointer;
`;
const NoticeContents2 = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 100px;
  display: flex;
  line-height: 1.2;
`;
const P = styled.p`
  display: block; ;
`;
const Customer = styled.div`
  margin-left: 10px;
`;
const Buttons = styled.div`
  margin-top: 5px;
  width: 400px;
  height: 50px;
  cursor: pointer;
`;
const Buttons1 = styled.button`
  width: 50px;
  height: 33px;
  border: none;
  border-radius: 5px;
  background-color: #f6f6f6;
  cursor: pointer;
`;
const Buttons2 = styled.button`
  width: 70px;
  height: 33px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #f6f6f6;
  cursor: pointer;
`;
const Buttons3 = styled.button`
  width: 100px;
  height: 33px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #f6f6f6;
  cursor: pointer;
`;
const Strong2 = styled.strong`
  display: block;
  margin-top: 24px;
  margin-left: 50px;
`;
const Span = styled.span`
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.25em;
`;
const QrCode = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  margin-top: 20px;
  margin-left: 50px;
  background-size: cover;
  background-image: url("https://img.cgv.co.kr/R2014/images/common/img_qrcode.gif");
`;
const Span2 = styled.div`
  text-align: center;
  display: block;
  width: 100%;
  margin-top: 100px;
  font-size: 12px;
  line-height: 1.25em;
`;
const Span3 = styled.div`
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.25em;
`;
