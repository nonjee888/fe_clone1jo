import React from "react";
import { ticket1 } from "../../img";
import styled from "styled-components";

function MainEtc() {
  return (
    <Div>
      <Div>
        {/*특별관*/}
        <SpecialWrap>
          특별관<Button>더보기</Button>
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
            <NoticeContents2>
              <Strong>고객센터</Strong>
              <A></A>
              <ButtonMore>더보기</ButtonMore>
            </NoticeContents2>
          </NoticeBox1>
          <NoticeBox2>앱 다운로드</NoticeBox2>
          <NoticeBox3 />
        </NoticeWrap>
      </SpecialWrap>
    </Div>
  );
}

export default MainEtc;

const Div = styled.div`
  display: block;
`;
const EtcTable = styled.div`
  display: flex;
  height: 436px;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
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
const SpecialWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  height: 400.92px;
`;
const NoticeWrap = styled.div`
  height: 238px;
  display: flex;
`;
const NoticeBox1 = styled.div`
  padding: 24px 26px 20px 30px;
  height: 198px;
  width: 395px;
  border: 1px solid #e4e4e4;
  border-radius: 15px 0 0 15px;
`;
const NoticeBox2 = styled.div`
  padding: 24px 26px 20px 30px;
  width: 180px;
  height: 198px;
  border: 1px solid #e4e4e4;
  border-radius: 0 15px 15px 0;
`;
const NoticeBox3 = styled.div`
  margin-left: 30px;
  width: 210px;
  height: 240px;
  border: 1px solid #e4e4e4;
  border-radius: 15px;
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
`;
const ButtonMore = styled.button`
  margin-left: 10px;
  width: 65.13px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  background: none;
  display: inline-block;
`;
const NoticeContents2 = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 46px;
  display: flex;
  line-height: 1.2;
`;
