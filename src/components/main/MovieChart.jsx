import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import MovieChartCard from "./MovieChartCard";
function MovieChart() {
  return (
    <div>
      <MvChrtWrap>
        <ChrtWrap>
          <TitleWrap>
            <Titles>
              <H3>무비차트</H3>
              <H4>상영예정작</H4>
            </Titles>
            <Button4>전체보기</Button4>
          </TitleWrap>
          <MovieList>
            <MovieWrapper>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                <StyleSwiper>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/*카드*/}
                    <StyleSlide>
                      <MovieChartCard />
                    </StyleSlide>
                    <MovieInfo>
                      <SlideTitle></SlideTitle>
                      <SlideRate></SlideRate>
                      <Slideinfo></Slideinfo>
                    </MovieInfo>
                  </SwiperSlide>
                </StyleSwiper>
              </Swiper>
            </MovieWrapper>
          </MovieList>
        </ChrtWrap>
      </MvChrtWrap>
    </div>
  );
}

export default MovieChart;

const MvChrtWrap = styled.div`
  height: 461px;
  width: 100%;
  background-color: #eeee;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  font-size: 100%;
  margin: 0 auto;
  vertical-align: baseline;
  word-break: break-all;
`;
const ChrtWrap = styled.div`
  height: 461px;
  width: 980px;
  background-color: #eeee;
  margin: 0 auto;
`;
const TitleWrap = styled.div`
  display: flex;
  width: 980;
  height: 37px;
  justify-content: space-between;
  align-items: center;
`;
const H3 = styled.h3`
  margin-top: 30px;
  height: auto;
  width: 200px;
  font-size: 26px;
  font-weight: 700;
`;
const H4 = styled.h3`
  margin-top: 30px;
  height: auto;
  width: 100%;
  font-size: 26px;
  font-weight: 400;
`;
const Titles = styled.div`
  margin-top: 30px;
  display: flex;
`;
const Button4 = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #e2e2e2;
  background: none;
  cursor: pointer;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 5%);
`;
const MovieList = styled.div`
  width: 980px;
  height: 295px;
  margin: 0 auto;
`;
const MovieWrapper = styled.div`
  margin-top: 70px;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;
const StyleSwiper = styled.div`
  position: relative;
  width: 980px;
  height: 295px;
`;
const StyleSlide = styled.div`
  width: 170px;
  height: 234px;
`;
const MovieInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SlideTitle = styled.strong`
  display: block;
  flex-basis: 100%;
  overflow: hidden;
  margin-top: 14px;
  font-size: 18px;
  color: #222;
  line-height: 1.167em;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  width: 170.4px;
  height: 21px;
`;
const SlideRate = styled.span`
  display: block;
  float: left;
  margin-top: 9px;
  font-size: 14px;
  color: #444;
  line-height: 1.214em;
  width: 47.5px;
  height: 17px;
`;
const Slideinfo = styled.span`
  display: block;
  float: left;
  margin-top: 9px;
  font-size: 14px;
  color: #444;
  line-height: 1.214em;
  width: 75px;
  height: 17px;
`;
