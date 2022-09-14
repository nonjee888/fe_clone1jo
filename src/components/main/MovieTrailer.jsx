import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function MovieTrailer() {
  return (
    <div>
      <StTrailerContainer>
        <StMovieBox>
          <StContents>
            <StVideoWrap>
              <ReactPlayer
                className="react-player"
                url={
                  "https://adimg.cgv.co.kr/images/202209/beautiful/beautiful_1080x608.mp4"
                } // 플레이어 url
                width="980px" // 플레이어 크기 (가로)
                height="580px" // 플레이어 크기 (세로)
                playing={true} // 자동 재생 on
                muted={true} // 자동 재생 on
                light={false} // 플레이어 모드
                pip={true} // pip 모드 설정 여부
              />
              <Videocontroller>
                <Strong>인생은 아름다워</Strong>
                <Span>
                  "한번보고 두번보고 자꾸만 보고싶네!"
                  <br />
                  "흥 포발! 주크박스 예고편GO"
                </Span>
              </Videocontroller>
            </StVideoWrap>
          </StContents>
        </StMovieBox>
      </StTrailerContainer>
    </div>
  );
}

export default MovieTrailer;

const StTrailerContainer = styled.div`
  position: relative;
  height: 498px;
  background-color: #000000;
`;

const StMovieBox = styled.div`
  margin: auto;
  max-width: 90%;
  height: 498px;
  display: block;
`;

const StContents = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
  display: block;
`;

const StVideoWrap = styled.div`
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  word-break: break-all;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;
const Strong = styled.strong`
  display: block;
  font-weight: 900;
  font-size: 40px;
  color: #fff;
  line-height: 1.45em;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 72%);
`;
const Span = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #fff;
  line-height: 1.45em;
  text-overflow: ellipsis;
  z-index: 3;
`;
const Videocontroller = styled.div`
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 200px;
  z-index: 100;
`;
