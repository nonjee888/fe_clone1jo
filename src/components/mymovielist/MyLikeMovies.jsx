import React from "react";
import styled from "styled-components";

const MyLikeMovies = () => {
  return (
    <div>
      <Container>
        <Contents>
          {/*사이드바 start*/}
          <ColsContent>
            <ColSideBar>
              <Profile>
                <ProfileInner>
                  <ProfileContents>
                    <ImageBox>
                      <ThumbImage></ThumbImage>
                    </ImageBox>
                    <BoxContent>
                      <Strong>아무개님</Strong>
                      <Div></Div>
                      <Em>닉네임</Em>
                    </BoxContent>
                  </ProfileContents>
                </ProfileInner>
              </Profile>
              <LikeBtn>
                {/*좋아요 누른 영화 숫자 들어갈 자리*/}
                <Howmany>??</Howmany>
                {/*좋아요 누른 영화 숫자 들어갈 자리*/}
                <P>기대되는 영화</P>
              </LikeBtn>
              <WatchedBtn>
                {/*내가 본 영화 숫자 들어갈 자리*/}
                <Howmany>??</Howmany>
                {/*내가 본 영화 숫자 들어갈 자리*/}
                <P>내가 본 영화</P>
              </WatchedBtn>
            </ColSideBar>
          </ColsContent>
          {/*사이드바 finish*/}
          <LikedMovies>
            {/*기대되는 영화 숫자 들어갈 자리*/}
            <LikedTitle>
              기대되는 영화<Howmany2>??건</Howmany2>
              {/*기대되는 영화 숫자 들어갈 자리*/}
              <Select name="movies" id="movies">
                <option value="등록일 순">등록일 순</option>
                <option value="개봉일 순">개봉일 순</option>
              </Select>
              {/*영화 년도별 or 등록일순 내림차순 오름차순*/}
              <GoBtn>GO</GoBtn>
              {/*영화 년도별 or 등록일순 내림차순 오름차순*/}
            </LikedTitle>
          </LikedMovies>
        </Contents>
      </Container>
    </div>
  );
};

export default MyLikeMovies;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Contents = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
`;
const ColsContent = styled.div`
  padding-top: 25px;
`;
const ColSideBar = styled.div`
  width: 160px;
  height: 527px;
  float: left;
`;
const Profile = styled.div`
  width: 160px;
  height: 241px;
  border-radius: 5px;
  position: relative;
  margin-top: 10px;
  border: solid #bab8ae 1px;
`;
const ProfileInner = styled.div`
  position: relative;
  margin-top: 0;
`;
const ProfileContents = styled.div`
  padding: 12px 12px 20px 12px;
  color: #222;
  width: 158px;
  height: 239px;
`;
const ImageBox = styled.div`
  position: relative;
  width: 135px;
  height: 164px;
`;
const ThumbImage = styled.div`
  width: 135px;
  height: 135px;
  display: block;
  position: relative;
  background-image: url("	http://img.cgv.co.kr/R2014/images/common/default_profile.gif");
  background-size: cover;
  border-radius: 50%;
`;
const BoxContent = styled.span`
  text-align: center;
`;
const Strong = styled.strong`
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-left: 35px;
`;
const Div = styled.div`
  display: inline-block;
  width: 12px;
  height: 14px;
  margin: 0 0 0 5px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziH2tgX4B5vCYQGtAGQgMVkGAJFmJjeDKuw&usqp=CAU");
  font: 0px/0 a;
  background-size: cover;
  vertical-align: top;
`;
const Em = styled.em`
  margin: 3px 0 10px;
  font-family: verdana, sans-serif;
  font-size: 10px;
  font-weight: bold;
  width: 134px;
  height: 12px;
  display: block;
  font-style: normal;
`;
const LikeBtn = styled.button`
  margin-left: 1px;
  margin-top: 10px;
  width: 158px;
  height: 80px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #f34949;
`;
const WatchedBtn = styled.button`
  margin-left: 1px;
  margin-top: 10px;
  width: 158px;
  height: 80px;
  border: 1px solid #bebebe;
  border-radius: 5px;
  color: #333;
  background: none;
`;
const Howmany = styled.strong`
  font-size: 25px;
`;
const P = styled.p`
  margin-top: 5px;
  font-weight: 800;
  font-size: 14px;
`;
const LikedMovies = styled.div`
  margin-top: 10px;
  position: relative;
  width: 800px;
  height: 100%;
  float: right;
`;
const LikedTitle = styled.div`
  display: flex;
  height: 30px;
  font-size: 17px;
  font-weight: 600;
  margin-left: 40px;
  align-items: center;
`;
const Howmany2 = styled.p`
  font-size: 14px;
  margin-top: 2px;
  margin-left: 5px;
  font-weight: 300;
`;
const Select = styled.select`
  margin-left: 480px;
  width: 80px;
  height: 28px;
  border: 1px solid #bebebe; ;
`;
const GoBtn = styled.button`
  margin-left: 3px;
  width: 37px;
  height: 26px;
  border: 2px solid gray;
`;
