import React from "react";
import styled from "styled-components";

function MovieTrailer() {
  return (
    <div>
      <StTrailerContainer>
        <StMovieBox>
          <StContents>
            <StVideoWrap>
              ::before
              <video id="hz" autoplay muted loop>
                <source
                  src="https://adimg.cgv.co.kr/images/202209/beautiful/beautiful_1080x608.mp4"
                  type="video/mp4"
                />
              </video>
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

const Video = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: scale(1.35);
  z-index: 1;
`;
